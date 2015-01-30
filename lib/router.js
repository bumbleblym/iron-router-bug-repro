Tests = new Mongo.Collection('tests');

if (Meteor.isServer) {
  Meteor.publish('tests', function() {
    return Tests.find();
  });
}

Router.route('/', function() {
  this.render('home');
}, {
  waitOn: function() {
    console.log('waiting');
    return Meteor.subscribe('tests');
  }
});

Router.onBeforeAction(function() {
  console.log('before');
  this.next();
});

Router.onAfterAction(function() {
  console.log('after');
});
