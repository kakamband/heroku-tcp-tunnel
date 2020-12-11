const app = require('fastify')();
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("app is listening to port: " + PORT);
});
var helloWorld = async function(req,replay){
    const stream = fs.createReadStream("./helloWorld.html")
    await replay.type('text/html').send(stream).code(200);
    console.log("Hello World: " + replay.statusCode);
}
app.get("/", helloWorld)