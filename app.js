const { proxyServer } = require('tcp-local-tunnel')
const express = require('express');



const serverPort = 3000;

const server = express();



server.get('/', function(req, res, next) {
  res.send('ok');
});

server.listen(serverPort);
var servidor= require('http').createServer(servidor);

proxyServer({
  proxyPort: 80, // remote port to access exposed local machine
  tunnelPort: 8010 // tunnel port
}); 