// 웹서버
// HTTP 1.1 -> 1997 -> request response

var http = require('http'); // http 객체

http.createServer(function(req,res){
  res.end('Hello');
}).listen(9001);

// localhost:9001