/*
这个 demo报错的
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: connect ECONNREFUSED 127.0.0.1:80
    at Object.exports._errnoException (util.js:1022:11)
    at exports._exceptionWithHostPort (util.js:1045:20)
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1087:14)
*/

// 使用 node 创建 web 客户端
var http = require('http');


// 用于请求的选项
var options = {
    host: 'localhost',
    port: '8088',
    path: '/index.html'
};

// 处理响应的回调函数
var callback = function(response) {

    // 不断更新数据
    var body = '';
    response.on ('data', function(data) {

        body += data;
    });

    response.on('end', function() {

        // 数据接收完成
        console.log(body);
    });
}

// 向服务端发送请求
var req = http.request(options, callback);
req.end();
