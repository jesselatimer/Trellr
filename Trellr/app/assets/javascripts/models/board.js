Trellr.Models.Board = Backbone.Model.extend ({
  urlRoot: "/api/boards",

  lists: function () {
    if (!this._lists) {
      this._lists = new Trellr.Collections.Lists([], { board: this });
    }
    return this._lists;
  },

  parse: function (response) {
    if (response.lists) {
      this.lists().set(response.lists);
      this.lists().each(function (list) {
        if (list.attributes.cards) {
          list.cards().set(list.attributes.cards);
        }
      });
      delete response.lists;
    }
    return response;
  }
});
