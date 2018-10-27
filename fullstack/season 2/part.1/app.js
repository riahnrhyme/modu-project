// 웹서버
// 웹 -> 요청과 응답
// request response

var http = require('http');

http.createServer(function(request,response){
  response.end('Hello World');
}).listen(9090);