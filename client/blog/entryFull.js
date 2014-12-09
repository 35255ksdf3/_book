Template.entryFull.events({
    'click #submitComment': function () {

        var title = $("#title").val();
        var content = $("#content").val();
        var timestamp = new Date().toLocaleString();

        Posts.update({_id: this._id}, {
            "$push": {
                "comments": {
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