define("wookie",
  ["jquery","underscore","backbone","router","components/background","components/blog/view"],
  function($, _, Backbone, Router, BackgroundView, BlogView) {
    "use strict";

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
        setTimeout(function(){
          $('html').addClass('loaded');
        }, 100);
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


    return Wookie;
  });