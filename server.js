//STRUCTURE TAKEN FROM http://blog.modulus.io/build-your-first-http-server-in-nodejs
var dispatcher = require('httpdispatcher');
var http = require('http');
    const PORT=8080; 

function handleRequest(request, response){
     try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}



var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);