import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";

var Wookie = Backbone.View.extend({

  SPEED: 200,

  el: $('body'),

  initialize: function(){
    _.bindAll(this, 'scene');

    this.canvas = this.$('canvas')[0];
    this.ctx = this.canvas.getContext('2d');
    this.setDimensions();
    this.scene();

    var self = this;
    $(window).resize(function(){
      if( self.timer ){
        clearTimeout(self.timer);
      }

      self.setDimensions();
      self.scene();
      self.render(0);
    });

    setTimeout(function(){
      self.render();
    }, 400);
  },

  render: function(time){
    this.$el
      .animate({
        'margin-top': (this.height - this.$('#container').height()) / 2
      }, time || 2000);
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
    var red, blue, green;
    var x = 60;
    var y = 60;

    var width = this.width / x;
    var height = this.height / y;

    var x_color = 255 / width;
    var y_color = 255 / height;

    for(var i = 0; i < width; i += 1 ){
      for(var j = 0; j < height; j += 1 ){
      var offset = Math.random() * 10;
        red = (x_color * i) + offset;
        green = (y_color * j) - offset;
        blue = Math.abs(x_color * y_color - offset);
        // console.log(red,green,blue);
        this.ctx.fillStyle = 'rgb('+ ~~red +','+ ~~green +','+ ~~blue +')';
        this.ctx.fillRect( i * x, j * y, x, y);
      }
    }
  },

  events: {
    'click #container a[data-action]': 'showAction'
  },

  showAction: function(e){
    e.preventDefault();
    var action = $(e.currentTarget).data('action');
    this.$el.addClass('show-'+ action);
  }
});

export default Wookie;
