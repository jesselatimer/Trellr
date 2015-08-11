Trellr.Views.BoardShow = Backbone.CompositeView.extend ({
  template: JST["boards/board_show"],

  initialize: function () {
    this.listenTo(this.model, "sync destroy", this.render);
    this.listenTo(this.collection, "add", this.addListView);
    this.collection.each(this.addListView.bind(this));
    this.addListForm();
  },

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  addListView: function (list) {
    var cards = list.cards();
    var subview = new Trellr.Views.ListSubview({ model: list, collection: cards });
    this.addSubview('.lists', subview);
  },

  addListForm: function () {
    var subview = new Trellr.Views.ListForm({ board: this.model });
    this.addSubview('.lists', subview);
  },

  onRender: function () {
    $('.lists').sortable({
      items: "li.list-item",
    });
    Backbone.CompositeView.prototype.onRender.call(this);
  }
});
