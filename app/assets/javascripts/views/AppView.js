var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html( appViewTemplate );

    // Render the grid of seats 

    for (var col=1; col<=gon.columns; col++) {
    	for (var row=1; row<=gon.rows; row++) {

    		// Check if this row column is booked
    		var reserved = false;
    		app.reservations.each (function (r) {

    			if (r.get('flight_id') === gon.flight_id) {	
    				if (r.get('row') === row && r.get('column') === col) {
    					reserved = true;
    					var reservationView = new app.ReservationView({model: r});
      					reservationView.render();
    				};
    			};
    		});	

    		if (!reserved) {
          // Somehow set the id of the available seat to "row-col"
          app.row = row;
          app.col = col;
    			var availseatView = new app.AvailseatView();
      			availseatView.render();
    		};
    	};
      this.$el.find("#reservations").append( "<br />" );
    };
  }
});