var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Node.js</h1>');
    res.emd('<p>Hello world</p>');
}).listen(3000);
console.log('Http server is listening at port 3000');