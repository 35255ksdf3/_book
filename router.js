Router.map(function(){
    this.route('home', {
        path: '/',
        template: 'frame',
        onBeforeAction: function () {
            Session.set("page", "blog");
            this.next();
        }
    });
    this.route('blog', {
        path: '/blog',
        template: 'frame',
        onBeforeAction: function () {
            Session.set("page", "blog");
            this.next();
        }
    });
    this.route('profile', {
        path: '/profile',
        template: 'frame',
        onBeforeAction: function () {
            Session.set("page", "profile");
            this.next();
        }
    });
    this.route('post', {
        path: '/post/:_id',
        template: 'blogEntryFull',
        notFoundTemplate: 'notFound',
        data: function() {
            return Posts.findOne({_id: this.params._id});
        }
    });
});