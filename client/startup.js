Meteor.startup(function () {
    Meteor.autorun(function () {
        //document.title = "Bla";
        $('head').append($("<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600&subset=latin,latin-ext' rel='stylesheet' type='text/css'>"));
        $('head').append($("<link href='http://fonts.googleapis.com/css?family=Crete+Round&subset=latin,latin-ext' rel='stylesheet' type='text/css'>"));
    });
});