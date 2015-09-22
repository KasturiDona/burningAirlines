var app = app || {};

app.ReservationView = Backbone.View.extend({
  tagName: 'b',
  render: function () {

  	// TODO add a click event on this reservation

    // this.$el.text( "Row:" + this.model.get('row') + "/" + "Col:" + this.model.get('column'));
    this.$el.text( "(X)");
    

    this.$el.appendTo('#reservations');
  }
});