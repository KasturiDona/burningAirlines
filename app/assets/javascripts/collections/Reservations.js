var app = app || {};

// This collection has the magical ability to render new secrets whenever they are
// added, via .fetch() ("AJAX") or .add() ("manually").

// More on custom Backbone events: http://backbonejs.org/#Events-catalog

app.Reservations = Backbone.Collection.extend({
  url: '/reservations',
  model: app.Reservation,
  initialize: function () {
    this.on('add', function (reservation) {
      app.appView.render();
    });
  }
});