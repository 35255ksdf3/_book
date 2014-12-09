// @todo: 35 - Find out how to place this helper in a utility file
/**
 * A dependency variable.
 * @param initialState The initial state
 * @constructor
 */
ReactiveStateHelper = function(initialState) {
    this._dep = new Deps.Dependency();
    this._state = initialState;

    this.getState = function() {
        this._dep.depend();
        return this._state;
    };

    this.setState = function(value) {
        this._state = value;
        this._dep.changed();
    };
};

var _state = new ReactiveStateHelper();

Template.comment.created = function() {
    this.data._state = new ReactiveStateHelper(true);
};

Template.comment.helpers({
    replyTemplate: function () {
        return this._state.getState() ? "blank" : "newComment";
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
            this._state.setState(true);
        } else {
            commentReplyArea.removeClass("collapsed").addClass("expanded");
            this._state.setState(false);
        }
    }
});