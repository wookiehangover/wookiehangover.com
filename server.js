var http = require('http');
var ramrod = require('ramrod');
var ecstatic = require('ecstatic');
var fs = require('fs');

var ec = ecstatic( __dirname );

var router = ramrod();

router.add('js/*path', ec);

router.add('css/*path', ec);

router.add('favicon.ico', ec);

router.on('*', function(req, res){
  req.url = '/index.html';
  ec(req, res);
});

var server = http.createServer( router.dispatch.bind(router) ).listen(1337);
