/*
    使用  node 创建 web 服务

    node 提供 http模块, http模块主要搭建 HTTP服务端和客户端
*/


// 最基本的 HTTP服务器架构demo (使用8081端口)
var http = require('http');
var fs = require('fs');
var url = require('url');


// 创建服务器
http.createServer( function (request, response) {

    //  解析请求, 包括文件名
    var pathname = url.parse(request.url).pathname;

    // 输出请求的文件名
    console.log('Request for'+ pathname+'received');

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function(err, data) {

        if (err) {
            console.log(err);

            // 404状态
            response.writeHead(404, {'Content-Type': 'text/html'})
        } else {

            // 200 状态
            response.writeHead(200, {'Content-Type': 'text/html'})

            // 响应文件内容
            response.write(data.toString());
        }

        // 发送响应数据
        response.end();
    });
}).listen(8081);

// 访问这个地址 http://127.0.0.1:8081/index.html
console.log('Server running at http://127.0.0.1:8081');
