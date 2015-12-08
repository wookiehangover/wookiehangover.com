define("components/blog/view",
  ["backbone","jquery","underscore"],
  function(Backbone, $, _) {
    "use strict";

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


    return BlogView;
  });