var http = require('http');
var ramrod = require('ramrod');
var ecstatic = require('ecstatic');
var fs = require('fs');

var requirejs = require('requirejs');
var Compiler = require("es6-module-transpiler").Compiler;

var ec = ecstatic( __dirname );
var router = ramrod();

router.add('app/*path', function(req, res, filename){
  fs.readFile(__dirname +'/app/'+ filename, 'utf8', function(err, buffer){
    if( err ){
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('oh snap'+ err);
      return;
    }

    // +1 to Tim Branyen for figuring all this out
    buffer = new Compiler(buffer, filename.slice(-2, 0)).toCJS();

    // This method allows hooking into the RequireJS toolchain.
    requirejs.tools.useLib(function(require) {
      // Convert to AMD if using CommonJS, by default the conversion
      // will ignore modules that already contain a define.
      require(["commonJs"], function(commonJs) {
        var wrapped = commonJs.convert(filename, buffer);
        var noDefine = wrapped.indexOf("define(") === -1;
        var noConfig = wrapped.indexOf("require.config") === -1;

        if (noDefine && noConfig) {
          wrapped = [
            "define(function(require, exports, module) {",
              wrapped,
            "});"
          ].join("\n");
        }

        res.writeHead(200, {
          'Content-Type': 'application/javascript'
        });
        res.write(wrapped);
        res.end();
      });
    });
  });
});

router.add('js/*path', ec);
router.add('css/*path', ec);
router.add('dist/*path', ec);

router.add(/^\/favicon\.ico$/, ec);

router.add('mu-5838535f-4f3e8d3d-3d477ef2-93c7f533', function(req, res){
  res.writeHead(200);
  res.end('42');
});

router.on('*', function(req, res){
  req.url = '/index.html';

  ec(req, res);
});

var server = http.createServer(function(req,res){
  router.dispatch(req,res);
}).listen(1337, function(){
  console.log('server listening on 1337');
});
