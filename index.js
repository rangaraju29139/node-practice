var http = require('http');
var dt = require('./myDateTime');

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type': 'text/html'});
//     res.end('Hello World!!'+dt.myDateTime());
// }).listen(8080);

http.createServer(function(req,res){
    res.writeHead(200,'content-type: text/html');
    res.write(req.url);
    res.end();
}).listen(8080);