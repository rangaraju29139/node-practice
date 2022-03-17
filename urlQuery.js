// urlQuery.js
var http=require('http');
var url=require('url');

http.createServer(function(req,res){
    var q=url.parse(req.url, true).query;
    var txt=q.year+""+q.month;
    res.writeHead(200,'content-type: text/html');
    res.write('hello world!'+txt);
    res.end();
}).listen(8080);