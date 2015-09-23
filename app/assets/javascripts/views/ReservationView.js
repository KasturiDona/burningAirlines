var app = app || {};

app.ReservationView = Backbone.View.extend({
  tagName: 'b',
  render: function () {

  	// go through all of the reservations, 
  	//choose the associated element and change its text
  	// TODO add a click event on this reservation

    this.$el.text( "Row:" + this.model.get('row') + "/" + "Col:" + this.model.get('column'));
    
    var id = this.model.get('user_id');
   
    var name = gon.reserve_name[id];

    this.$el.text( name );
    this.$el.attr( "class", "red" );
    this.$el.appendTo('#reservations');
  },

  renderNewReservation: function ( row, column ) {
  	this.$el.find('#' + row + "-" + column).text( gon.user_name );
    this.$el.find('#' + row + "-" + column).attr( "class", "red" );
   }
});