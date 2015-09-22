var app = app || {};

app.BreakView = Backbone.View.extend({
  tagName: 'br',
  render: function () {
    this.$el.appendTo('#reservations');
  }
});