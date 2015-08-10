Trellr.Routers.AppRouter = Backbone.Router.extend ({
  routes: {
    ""           : "boardIndex",
    "boards/:id" : "boardShow"
  },

  initialize: function () {
    this.$rootEl = $('.content');
    this.collection = new Trellr.Collections.Boards();
    this.collection.fetch();
  },

  boardIndex: function () {
    var view = new Trellr.Views.BoardIndex({ collection: this.collection });
    this._swapView(view);
  },

  boardShow: function (id) {
    var board = this.collection.getOrFetch(id);
    var view = new Trellr.Views.BoardShow({
      model: board,
      collection: board.lists()
    });
    this._swapView(view);
  },

  _swapView: function (newView) {
    this._view && this._view.remove();
    this._view = newView;
    this.$rootEl.html(newView.render().$el);
  }
});
