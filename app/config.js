// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
  deps: ['main'],

  paths: {
    // Make vendor easier to access.
    "vendor": "../js/vendor",
    // Almond is used to lighten the output filesize.
    "almond": "../js/vendor/almond/almond",

    // Opt for Lo-Dash Underscore compatibility build over Underscore.
    "underscore": "../js/vendor/lodash/dist/lodash.underscore",
    // Map remaining vendor dependencies.
    "jquery": "../js/vendor/jquery/jquery",
    "backbone": "../js/vendor/backbone/backbone",
    "jquery-raf": "../js/vendor/jquery-requestAnimationFrame/dist/jquery.requestAnimationFrame"
  },

  shim: {
    // This is required to ensure Backbone works as expected within the AMD
    // environment.
    "backbone": {
      // These are the two hard dependencies that will be loaded first.
      deps: ["jquery", "underscore"],

      // This maps the global `Backbone` object to `require("backbone")`.
      exports: "Backbone"
    },

    "jquery-raf": {
      deps: ["jquery"]
    }

  }
});
