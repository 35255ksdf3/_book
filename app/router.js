Router.map(function(){
    this.route('home', {
        path: '/',
        template: 'blog'
    });
    this.route('post', {
        path: '/post/:_id',
        template: 'entryFull',
        notFoundTemplate: 'notFound',
        data: function() {
            return Posts.findOne({_id: this.params._id});
        }
    });
});