var forever = require('forever');

forever.load({
  root: __dirname + '/log',
  pidPath: __dirname + '/bin'
});

forever.startServer();

console.log('Starting Server...')
forever.startDaemon(__dirname + '/server.js');
