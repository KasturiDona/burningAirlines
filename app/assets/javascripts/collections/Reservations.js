var app = app || {};

// This collection has the magical ability to render new secrets whenever they are
// added, via .fetch() ("AJAX") or .add() ("manually").

// More on custom Backbone events: http://backbonejs.org/#Events-catalog

app.Reservations = Backbone.Collection.extend({
  url: '/reservations',
  model: app.Reservation,
  initialize: function () {
    
    this.on('add', function (reservation) {

    // Note: We only need reservations where
    //     flight_id = gon.flight_id
    
      // if (reservation.get('flight_id') === gon.flight_id) {	

      // 	var reservationView = new app.ReservationView({model: reservation});
      // 	reservationView.render();

      // }

      // Render the whole app whenever a reservation is added
      app.appView.render();

    });
  }
});