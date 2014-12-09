Router.map(function(){
    this.route('home', {
        path: '/',
        template: 'blog'
    });
    this.route('profile', {
        path: '/profile',
        template: 'profile'
    });
    this.route('post', {
        path: '/post/:_id',
        template: 'blogEntryFull',
        notFoundTemplate: 'notFound',
        data: function() {
            return Posts.findOne({_id: this.params._id});
        }
    });

    this.route('backendViewEntry', {

    });

    this.route('backendDeleteEntry', {

    });

    this.route('backendMoveEntryToArchive', {

    });
});