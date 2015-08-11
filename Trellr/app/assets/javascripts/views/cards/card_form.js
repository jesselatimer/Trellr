Trellr.Views.CardForm = Backbone.View.extend ({
  template: JST["cards/card_form"],
  tagName: 'div',

  events: {
    "submit form" : "addCard"
  },

  initialize: function (options) {
    this.list = options.list;
  },

  render: function () {
    var view = this.template();
    this.$el.html(view);
    return this;
  },

  addCard: function (e) {
    e.preventDefault();

    newCard = new Trellr.Models.Card();
    var form = $(e.currentTarget);
    var formData = form.serializeJSON();
    newCard.set(formData);
    newCard.attributes.card.list_id = this.list.id;
    form.find('.card-title').val("");
    newCard.save({}, {
      success: function () {
        this.list.cards().add(newCard);
      }.bind(this)
    });
  }
});
