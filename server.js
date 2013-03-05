var http = require('http');
var ramrod = require('ramrod');
var ecstatic = require('ecstatic');
var fs = require('fs');

var ec = ecstatic( __dirname );

var router = ramrod();

router.add('js/*path', ec);

router.add('css/*path', ec);

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
}).listen(1337);
