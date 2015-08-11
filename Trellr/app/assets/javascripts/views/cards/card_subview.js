Trellr.Views.CardSubview = Backbone.View.extend ({
  template: JST["cards/card_subview"],
  tagName: 'li',
  className: 'card-item',

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
