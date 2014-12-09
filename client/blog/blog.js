Template.blog.helpers({
    posts: function () {
        return Posts.find();
    },

    canPost: function () {
        return true;
    },

    isModerator: function () {
        return true;
    }
});

Template.blog.events({
    'click #newEntry': function () {
        var title = $("#title").val();
        var content = $("#content").val();
        var timestamp = new Date().toLocaleString();

        Posts.insert({
            author: 'ich',
            timestamp: timestamp,
            title: title,
            content: content,
            comments: []
        });
    }
});

Template.entryFull.events({
    'click #newComment': function () {

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
    }
});