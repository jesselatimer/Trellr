Trellr.Views.ListSubview = Backbone.CompositeView.extend ({
  template: JST["lists/list_subview"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.addListView);
    this.collection.each(this.addCardView.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addCardView: function (card) {
    var subview = new Trellr.Views.ListSubview({ model: card });
    this.addSubview('.cards', subview);
  }
});
