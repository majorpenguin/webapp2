//STRUCTURE TAKEN FROM http://blog.modulus.io/build-your-first-http-server-in-nodejs
var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var js2xmlparser = require("js2xmlparser");
var xslt = require('node_xslt');

var fs = require('fs')

var router = express();
var server = http.createServer(router);

router.use(express.static(__dirname));
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/', function(req, res) {
  res.sendFile('index.html');
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});