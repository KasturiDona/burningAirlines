var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html( appViewTemplate );

    // Render the grid of seats 

    for (var col=0; col<gon.columns; col++) {
    	for (var row=0; row<gon.rows; row++) {

    		// Check if this row column is booked
    		var reserved = false;
    		app.reservations.each (function (r) {

    			if (r.get('flight_id') === gon.flight_id) {	
    				if (r.get('row') -1 === row && r.get('column') -1 === col) {
    					reserved = true;
    					var reservationView = new app.ReservationView({model: r});
      					reservationView.render();
    				};
    			};
    		});	

    		if (!reserved) {

          // Somehow set the id of the available seat to "row-col"
    			var availseatView = new app.AvailseatView();
      			availseatView.render();
    		};
    	};
    	var breakView = new app.BreakView();
      	breakView.render();
    };

  }
});