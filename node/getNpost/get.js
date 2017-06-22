/*
    获取 Get 请求内容

    Get 请求直接嵌入在路径中, URL是完整的请求路径, 包括 ? 后的部分, 因此可以
   手动解析后面的内容作为 Get 的请求参数
*/

// node 的 url 模块的 parse 函数提供这个功能
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer( function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

// 访问  http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com 查看结果
