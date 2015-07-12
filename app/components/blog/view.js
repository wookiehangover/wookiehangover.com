import Backbone from "backbone";
import $ from "jquery";

var BlogView = Backbone.View.extend({
  el: $('#blog'),

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
