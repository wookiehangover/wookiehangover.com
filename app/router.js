import Backbone from "backbone";

var Router = Backbone.Router.extend({

  initialize: function(options){
    if( !options.app ){
      throw new Error('requires app instance');
    }
    this.app = options.app;
  },

  routes: {
    '': 'showIndex',
    'blog': 'showBlog'
  },

  showIndex: function(){
    this.app.$el.removeClass();
    this.app.background.setDefaultValues();
  },

  showBlog: function(){
    this.app.showView('blog');
  }

});

export default Router;