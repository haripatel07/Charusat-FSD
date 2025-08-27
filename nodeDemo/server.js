var http = require('http');
var a = 10;
var b = 20;

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write('Hello Line 1');
    res.write(`<br /> Value of A is ${a} <br /> Value of B is ${b} <br /> Sum is ${a + b}`);
    res.end("<br /> Hello Line 2");
}).listen(4000);

console.log("Server started on http://127.0.0.1:4000");