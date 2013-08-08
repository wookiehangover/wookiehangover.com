module.exports = ->
  # Convert ES6 to AMD.  Hey-oh!
  @initConfig
    clean: ["dist/"]

    # This task uses James Burke's excellent r.js AMD builder to take all
    # modules and concatenate them into a single file.
    requirejs:
      release:
        options:
          # Include the main configuration file.
          mainConfigFile: "app/config.js"

          # Setting the base url to the distribution directory allows the
          # Uglify minification process to correctly map paths for Source
          # Maps.
          baseUrl: "dist/app"

          # Include Almond to slim down the built filesize.
          name: "almond"

          # Set the Bootstrap as the main entry point.
          include: ["main"]
          insertRequire: ["main"]

          # Since we bootstrap with nested `require` calls this option allows
          # R.js to find them.
          findNestedDependencies: true

          # Wrap everything in an IIFE.
          wrap: true

          # Output file.
          out: "dist/source.min.js"

          # Enable Source Map generation.
          generateSourceMaps: true

          # Do not preserve any license comments when working with source maps.
          # These options are incompatible.
          preserveLicenseComments: false

          # Minify using UglifyJS.
          optimize: "uglify2"

    transpile:
      main:
        type: "amd",

        files: [{
          expand: true,
          cwd: "app/",
          src: ["**/*.js"],
          dest: "dist/app"
        }]

    copy:
      release:
        files: [
          { src: "js/**", dest: "dist/" }
          { src: "app/**", dest: "dist/" }
        ]

    watch:
      all:
        files: ["app/**/*.js"]
        tasks: ["compile"]

  @loadNpmTasks("grunt-contrib-copy")
  @loadNpmTasks("grunt-contrib-watch")

  @loadNpmTasks("grunt-bbb-requirejs")
  @loadNpmTasks("grunt-contrib-clean")
  @loadNpmTasks("grunt-es6-module-transpiler")

  @registerTask("compile", [
    "clean"
    "copy"
    "transpile"
    "requirejs"
  ])

  @registerTask("default", [ "compile" ])
