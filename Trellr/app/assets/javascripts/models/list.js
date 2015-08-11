Trellr.Models.List = Backbone.Model.extend ({
  urlRoot: "/api/lists",

  cards: function () {
    if (!this._cards) {
      this._cards = new Trellr.Collections.Cards([], { list: this });
    }
    return this._cards;
  }
});
