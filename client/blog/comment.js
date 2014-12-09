
var CommentWidgetState = function () {
    this._deps = {};
    this._state = {};


    // @todo: 35 - Check out if there is a way to do this without the id (replyTo expand/collapse)
    this.addDep = function(id) {
        this._deps[id] = new Deps.Dependency();
        this._state[id] = true;
    }

    this.getCollapsed = function(id) {
        if (typeof this._deps[id] === "undefined")
            this.addDep(id);

        this._deps[id].depend();
        return this._state[id];
    };

    this.setCollapsed = function(id, value) {
        if (typeof this._deps[id] === "undefined")
            this.addDep(id);

        this._state[id] = value;
        this._deps[id].changed();
    };
}

var _state = new CommentWidgetState();

Template.comment.created = function() {
    _state.addDep(this.id);
};

Template.comment.helpers({
    replyTemplate: function () {
        return _state.getCollapsed(this.id) ? "blank" : "newComment";
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
            _state.setCollapsed(this.id, true);
        } else {
            commentReplyArea.removeClass("collapsed").addClass("expanded");
            _state.setCollapsed(this.id, false);
        }
    }
});