Trellr.Views.CardSubview = Backbone.View.extend ({
  template: JST["lists/list_subview"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
