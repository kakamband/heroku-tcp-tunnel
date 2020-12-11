require('dotenv').config();

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];
rooms = [];
// Store all of the sockets and their respective room numbers
userrooms = {}

YT3_API_KEY = process.env.YT3_API_KEY;
DM_API_KEY = process.env.DM_API_KEY;

// Set given room for url parameter
var given_room = ""

app.use(express.static(__dirname + '/'));

server.listen(process.env.PORT || 3000);
console.log('Server Started . . .');


// app.param('room', function(req,res, next, room){
//     console.log("testing")
//     console.log(room)
//     given_room = room
// res.sendFile(__dirname + '/index.html');
// });


app.get('/', function(req, res) {
    given_room = req.params.room
    res.sendFile(__dirname + '/index.html');
});


const { proxyServer } = require('tcp-local-tunnel');
 
proxyServer({
  proxyPort: 80, // remote port to access exposed local machine
  tunnelPort: 8010 // tunnel port
});