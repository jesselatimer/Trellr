Trellr.Views.BoardIndex = Backbone.CompositeView.extend ({
  template: JST["boards/board_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ boards: this.collection });
    this.$el.html(renderedContent);
    return this;
  }
});
