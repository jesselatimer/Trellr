Trellr.Views.BoardShow = Backbone.CompositeView.extend ({
  template: JST["boards/board_show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.addListView);
    this.collection.each(this.addListView.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addListView: function (list) {
    var cards = new Trellr.Collections.Cards();
    var subview = new Trellr.Views.ListSubview({ model: list, collection: cards });
    this.addSubview('.lists', subview);
  }
});
