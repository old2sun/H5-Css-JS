/*
    获取 Post 请求内容

    Post 请求内容都在请求体中, http.ServerRequest 没有一个属性内容为请求体, 原因是等待
    请求体传输可能是耗时的工作.

    node.js 默认不会解析请求体, 有需要就手动来做
*/

var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function (req, res) {

    // 定义一个post变量, 用于暂存请求体信息
    var post = '';

    // 通过 req的 data 事件监听函数, 每当接收到请求体的数据, 就累加到 post 变量中
    req.on('data', function(chunk) {

        post += chunk;
    });

    // 在 end 事件触发后, 通过 querystring.parse 将post解析为真正的POST请求格式，然后向客户端返回
    req.on('end', function() {
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(3000);

// 访问  http://localhost:3000/user?name=CJY&url=www.baidu.com 查看结果
