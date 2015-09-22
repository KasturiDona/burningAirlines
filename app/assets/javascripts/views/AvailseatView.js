var app = app || {};

app.AvailseatView = Backbone.View.extend({
  tagName: 'b',
  
  // Add a click event

  render: function () {

  	// TODO add a click event on this reservation

    this.$el.text( "(O)" ) ;
    this.$el.appendTo('#reservations');
  }


// createSecret: function () {
//     var secret = new app.Secret();
//     var content = this.$el.find('textarea').val();
//     secret.set('content', content);
//     secret.save();

//    // Don't forget .add() will trigger the 'add' event on the collection and so render
//    // the new secret!
//     app.secrets.add(secret);

//     this.$el.find('textarea').val('').focus();
//   }

});