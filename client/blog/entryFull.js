Template.entryFull.events({
    'click #submitComment': function () {

        var title = $("#title").val();
        var content = $("#content").val();
        var timestamp = new Date().toLocaleString();

        this.commentCount++;

        Posts.update({_id: this._id}, {
            "$set": {
                commentCount: this.commentCount
            }
        });

        Posts.update({_id: this._id}, {
            "$push": {
                "comments": {
                    id: this.commentCount,
                    author: 'ich',
                    timestamp: timestamp,
                    title: title,
                    content: content
                }
            }
        });

        return false;
    }
});