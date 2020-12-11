const express = require('express');



const serverPort = 3000;

const server = express();



server.get('/', function(req, res, next) {
  res.send('ok');
});

server.listen(serverPort);
var servidor= require('http').createServer(servidor);
