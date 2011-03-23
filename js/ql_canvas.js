(function($){

/*
* requestAniFrame() shim from the lovely and talented Paul Irish
*   http://paulirish.com/2011/requestanimationframe-for-smart-animating/
*/
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();

window.ql_canvas = function(options){

  var settings = $.extend({}, ql_canvas.defaultOptions, options),
      cavnas, ctx, $canvas;

  $canvas = $('<canvas/>', {
              id: settings.name,
              width: settings.width,
              height: settings.height,
              style: settings.style || ""
            }).appendTo( settings.target );

  canvas = $canvas[0];
  canvas.height = settings.height;
  canvas.width = settings.width;

  ctx = canvas.getContext('2d');

  function chain(){
    var orig_args = Array.prototype.slice.call(arguments);

    return function(){
      var args = orig_args.concat( Array.prototype.slice.call(arguments) ),
          length = args.length;

      for( var i = 0; i < args.length; i += 1 ){
        if( $.isFunction( args[i] ) === true) args[i].call(this, ctx, $canvas, settings);
      }
    };
  }

  return {
    'init': chain( settings.init ),

    'chain': chain(),

    '$': $canvas,

    'ctx': ctx,

    'settings': settings,

    'clear': function( width, height){
      ctx.clearRect(0,0, width || settings.width, height || settings.height);
    },

    'resize': function(width, height, callback){
      canvas.width = this.settings.width = width || settings.width;
      canvas.height = this.settings.height = height || settings.height;

      if( $.isFunction( callback )) callback.call(this, ctx, $canvas, settings);
    }
  };
};

ql_canvas.defaultOptions = {
  name: "ql_canvas"+$.now(),
  target: $('body'),
  width: 200,
  height: 200,
  style: false,
  init: false
};

})(jQuery);
