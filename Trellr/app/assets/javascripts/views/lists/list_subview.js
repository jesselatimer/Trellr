Trellr.Views.ListSubview = Backbone.CompositeView.extend ({
  template: JST["lists/list_subview"],
  tagName: "li",
  className: "list-item",

  events: {
    "click .delete-list" : "deleteList"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.addCardView);
    this.collection.each(this.addCardView.bind(this));
    this.addCardForm();
  },

  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  addCardView: function (card) {
    var subview = new Trellr.Views.CardSubview({ model: card });
    this.addSubview('.cards', subview);
  },

  deleteList: function (e) {
    e.preventDefault();
    this.model.destroy();
    this.remove();
  },

  addCardForm: function () {
    var subview = new Trellr.Views.CardForm({ list: this.model });
    this.addSubview('.cards', subview);
  },

  onRender: function () {
    $('.cards').sortable({
      items: "li.card-item",
      connectWith: ".cards"
    });
    Backbone.CompositeView.prototype.onRender.call(this);
  }
});
