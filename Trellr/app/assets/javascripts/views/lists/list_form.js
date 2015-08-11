Trellr.Views.ListForm = Backbone.View.extend ({
  template: JST["lists/list_form"],
  tagName: 'div',

  events: {
    "submit form" : "addList"
  },

  initialize: function (options) {
    this.board = options.board;
  },

  render: function () {
    var view = this.template();
    this.$el.html(view);
    return this;
  },

  addList: function (e) {
    e.preventDefault();

    newList = new Trellr.Models.List();
    var form = $(e.currentTarget);
    var formData = form.serializeJSON();
    newList.set(formData);
    newList.attributes.list.board_id = this.board.id;
    form.find('.list-title').val("");
    newList.save({}, {
      success: function () {
        this.board.lists().add(newList);
      }.bind(this)
    });
  }
});
