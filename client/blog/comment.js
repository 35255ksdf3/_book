/**
 * Can be used to manage the state of a widget (more or less like the session)
 */
WidgetState = function() {
    this._deps = {};
    this._state = {};

    // @todo: 35 - Check out if there is a way to do this without the id (behaves too much like Session)
    this.addState = function(id, initialState) {
        this._deps[id] = new Deps.Dependency();
        this._state[id] = initialState;
    }

    this.getState = function(id) {
        this._deps[id].depend();
        return this._state[id];
    };

    this.setState = function(id, value) {
        this._state[id] = value;
        this._deps[id].changed();
    };
};

var _state = new WidgetState();

Template.comment.created = function() {
    _state.addState(this.data.id, true);
};

Template.comment.helpers({
    replyTemplate: function () {
        return _state.getState(this.id) ? "blank" : "newComment";
    },
    replyTemplateData: function () {
        return {
            replyToId: this.id
        };
    }
});

Template.comment.events({
    'click .replyToComment': function (e) {
        // @todo: 35 - Find a better way to distinguish the correct event target
        if (e.target.id != "replyToComment_" + this.id)
            return;

        var commentReplyArea = $("#" + this.id + " .formReplyToComment");
        if (commentReplyArea.hasClass("expanded")) {
            commentReplyArea.removeClass("expanded").addClass("collapsed");
            _state.setState(this.id, true);
        } else {
            commentReplyArea.removeClass("collapsed").addClass("expanded");
            _state.setState(this.id, false);
        }
    }
});