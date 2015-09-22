
var app = app || {}

app.AppRouter = Backbone.Router.extend({

  routes: {
    "": "index", 
    
    "flights": "viewFlight", 
    "flights/:id":"viewBook", 
    
  },

  index: function () {
    $('#main').hide();
  },

  viewFlight: function (id) {
    $('#main').show();
    $('#main').empty();
    app.airplanes.fetch().done(function () {
      var flight = app.flights.get(id); 
      var flightView = new app.FlightView({model: flight}); 
      flightView.render();
    }); 
   
    }, 

  viewBook:function(id){
    $('#main').show();
    app.flights.fetch().done(function () {
      var flight = app.flights.get(id); 
      var plane_id = flight.attributes.airplane_id; 
      var options = {
        flight: app.flights.get(id), 
        airplane_id: flight.attributes.airplane_id, 
      }
      var bookingView = new app.ReservationView({model: reservation});
      reservationView.render(reservation.airplane);
    }); 
  }, 

});