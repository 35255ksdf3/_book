Template.blog.helpers({
    posts: function () {
        return Posts.find();
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
            commentCount: 0,
            comments: []
        });

        return false;
    }
});