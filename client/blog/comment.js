Template.comment.events({
    'click #reply': function () {
        var commentReplyArea = $("#" + this.id + " .formReplyToComment");
        if (commentReplyArea.hasClass("expanded")) {
            commentReplyArea.removeClass("expanded").addClass("collapsed");
        } else {
            commentReplyArea.removeClass("collapsed").addClass("expanded");
        }
    }
});