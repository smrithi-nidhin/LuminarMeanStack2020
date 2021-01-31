const http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{});
    res.write('Helooo world');
    res.end();
}).listen(9000)