// HTTP 函数传递另外写法
var http = require("http");

function onRequest(request,response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("helloween");
	response.end();
}

http.createServer(onRequest).listen(8888);