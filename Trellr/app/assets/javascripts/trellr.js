window.Trellr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Trellr.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Trellr.initialize();
});
