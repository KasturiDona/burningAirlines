
var app = app || {};

app.AppRouter = Backbone.Router.extend({

  routes: {
    "": "index" 
  },

  index: function () {
    app.appView = new app.AppView({collection: app.reservations});
    app.appView.render();
  }

});