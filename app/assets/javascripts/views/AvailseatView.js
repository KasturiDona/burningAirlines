var app = app || {};

app.AvailseatView = Backbone.View.extend({
  tagName: 'b',
  
  // Add a click event
  events: {
  	'click': 'reserveSeat'
  },

  render: function () {

  	// TODO add a click event on this reservation

    this.$el.html( " <span class='glyphicon glyphicon-check' aria-hidden='true'></span> " );
    this.$el.attr( "class", "green");
    this.$el.attr('id',( (app.row).toString() + "-" + (app.col).toString() ) );
    this.$el.appendTo('#reservations');
  },

reserveSeat: function () {
    var r = new app.Reservation();
    var pos = this.$el.attr('id').split('-');
    row = pos[0];
    col = pos[1];

	console.log("reserving row",row);
	console.log("reserving col",col);    

    r.set('row', row);
    r.set('column', col);
    r.set('user_id', gon.user_id);
    r.set('flight_id', gon.flight_id);

    r.save().done(function () {
    	app.reservations.add(r);
    });

    var rowLetter = " ABCDE";
    alert( "Reserved seat : " + rowLetter[row] + col );
  }
});