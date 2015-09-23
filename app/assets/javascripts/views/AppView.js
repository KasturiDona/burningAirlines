var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html( appViewTemplate );

    this.$el.find("#data").text( "Flight Number : " + gon.flight_number ).attr( "class", "blue" );
    this.$el.find("#flydate").text( "Flight Date : " + gon.flight_date ).attr( "class", "blue" );

    // Render the grid of seats 

    var letters = " ABCDE";
    for (var row=1; row<=gon.rows; row++) {
      this.$el.find("#reservations").append( " <b>-- " + letters[row] +" --</b> " );
    }
    this.$el.find("#reservations").append( "<br />" );

    for (var col=1; col<=gon.columns; col++) {

      this.$el.find("#reservations").append( "<b>"+col+"</b>" );

    	for (var row=1; row<=gon.rows; row++) {

        // this.$el.find("#reservations").append( "<b>*</b>" );

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