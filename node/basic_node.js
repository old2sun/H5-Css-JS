var http = require('http'); // 引入 node.js 自带的 http 模块 
// 调用这个模块的方法 createServer()
http.createServer(function(request,response){
	// 发送http头部，状态码200:ok, 内容类型:text/plain
	response.writeHead(200,{'Content-type':'text/plain'});
	// 发送响应内容
	response.end('Hello node');
	 // listen()，可以指定http监听的端口，如果忽略IP，默认127.0.0.1
}).listen(8888); 
// 在终端打印信息
console.log('Server running at http://127.0.0.1:8888/');