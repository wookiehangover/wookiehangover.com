import Backbone from "backbone";
import Router from "./router";
import BackgroundView from "./components/background";
import BlogView from "./components/blog/view";

var Wookie = Backbone.View.extend({

  el: document.body,

  initialize: function(){
    var injector = { app: this };

    this.router = new Router(injector);
    this.background = new BackgroundView(injector);

    this.$el.append(this.background.el)

    this.views = {
      blog: new BlogView(injector)
    };
  },

  showView: function(view){
    this.el.className = "";
    this.el.classList.add(`show-${view}`);
    if( this.views[view] ){
      this.views[view].show();
    }
  }
});

export default Wookie;
