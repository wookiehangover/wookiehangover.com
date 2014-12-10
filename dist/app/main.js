define("main",
  ["jquery","wookie","jquery-raf"],
  function($, Wookie, raf) {
    "use strict";

    $(function(){
      window.wookie = new Wookie();
      Backbone.history.start();
    });

  });