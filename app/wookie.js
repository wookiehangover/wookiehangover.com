import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import Router from "router";
import BackgroundView from "components/background";
import BlogView from "components/blog/view";

var Wookie = Backbone.View.extend({

  el: $('body'),

  initialize: function(){
    var injector = { app: this };

    this.router = new Router(injector);
    this.background = new BackgroundView(injector);

    this.views = {
      blog: new BlogView(injector)
    };

    this.render();
  },

  render: function(time){
    this.$el
      .css({
        'margin-top': (this.background.height - this.$('#container').height()) / 2
      });
  },

  showView: function(view){
    this.$el.removeClass();
    this.$el.addClass('show-'+ view);
    if( this.views[view] ){
      this.views[view].show();
    }
  }
});

export default Wookie;
