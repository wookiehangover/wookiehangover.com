import Backbone from "backbone";

var BlogView = Backbone.View.extend({
  el: document.getElementById('blog'),

  initialize: function(options){
    if( !options.app ){
      throw new Error('require app instance');
    }
    this.app = options.app;
  },

  show: function(){
    this.app.background.X_COLOR = -150;
  }
});

export default BlogView;
