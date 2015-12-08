define("components/background",
  ["jquery","backbone"],
  function($, Backbone) {
    "use strict";

    var BackgroundView = Backbone.View.extend({
      el: $('canvas'),

      initialize: function(options){
        if( !options.app ){
          throw new Error('requires app instance');
        }
        this.app = options.app;

        _.bindAll(this, 'scene');

        this.canvas = this.el;
        this.ctx = this.canvas.getContext('2d');
        this.setDefaultValues();
        this.setDimensions();
        this.scene();

        var self = this;
        $(window).resize(function(){
          if( self.timer ){
            clearTimeout(self.timer);
          }

          self.setDimensions();
          self.scene();
          self.app.render(0);
        });
      },

      setDefaultValues: function(){
        this.SPEED = 200;
        this.X_COLOR = 255;
        this.Y_COLOR = 255;
        this.OFFSET = 10;
      },

      scene: function(){
        this.animateBackground();
        this.timer = setTimeout(this.scene, this.SPEED);
      },

      setDimensions: function(){
        this.height = $(window).height();
        this.width = $(window).width();
        if( this.canvas ){
          this.canvas.height = this.height;
          this.canvas.width = this.width;
        }
      },

      animateBackground: function(){
        var red, blue, green, offset;
        var x = 60;
        var y = 60;

        var width = this.width / x;
        var height = this.height / y;

        var x_color = this.X_COLOR / width;
        var y_color = this.Y_COLOR / height;

        for(var i = 0; i < width; i += 1 ){
          for(var j = 0; j < height; j += 1 ){
            offset = Math.random() * this.OFFSET;
            red = (x_color * i) + offset;
            green = (y_color * j) - offset;
            blue = Math.abs(x_color * y_color - offset);
            // console.log(red,green,blue);
            this.ctx.fillStyle = 'rgb('+ ~~red +','+ ~~green +','+ ~~blue +')';
            this.ctx.fillRect( i * x, j * y, x, y);
          }
        }
      }

    });


    return BackgroundView;
  });