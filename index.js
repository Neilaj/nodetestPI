var http = require("http");
http.createServer(function(req, res){
	res.writeHeader(200, {'Content-Type' : 'text/plain'});
	res.end('Hello Prabuji');
}).listen(8585);
console.log ('Server Started');


