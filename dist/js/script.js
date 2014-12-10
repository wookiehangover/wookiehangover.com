jQuery(function($){
  var pause = false;
  var speed = 200;

  window.my_canvas = ql_canvas({
    width: $(window).width(),
    height: $(window).height(),
    style: "float:left; position:fixed; top:0; left:0; z-index:-10;",
    init: function canvasInit(ctx, $canvas, settings) {
      var red, blue, green,

          x = 60,
          y = 60,

          width = settings.width / x,
          height = settings.height / y,

          x_color = 255 / width,
          y_color = 255 / height;

      for(var i = 0; i < width; i += 1 ){
        for(var j = 0; j < height; j += 1 ){

          red = ~~(x_color * i);
          blue = ~~(y_color * j);
          green = ~~(100 - x_color * (Math.random() * j));

          ctx.fillStyle = 'rgb('+ red +','+ blue +','+ green +')';
          ctx.fillRect( i * x, j * y, x, y);
        }
      }
    }
  });

  my_canvas.init();

  function animate() {
    if( pause ) return;

    my_canvas.init();

    if (speed)
      return setTimeout( function(){ requestAnimFrame( animate ); }, speed);

    requestAnimFrame( animate );
  }

  animate();

  $(window).resize(function(){
    my_canvas.resize( $(window).width(), $(window).height() );
    var h = ($(window).height() - 500) / 2;
    $('#container').animate({ marginTop: h +'px' }, 2000);
  }).trigger('resize');


  function stop(e){
    speed = 2000;
  }

  function start(e){
    speed = 200;
  }

  $('nav').on('mouseover', 'a', stop).on('mouseout', 'a', start);

  $('#container').on('click','[data-action]', function(e){
    e.preventDefault();

    var action = $(e.currentTarget).data('action');

    $('body').addClass('show-'+ action);
  });

});



















