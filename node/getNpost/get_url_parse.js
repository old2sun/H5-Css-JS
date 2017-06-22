// 可以使用 url.parse 方法解析 url 的参数

var http = require('http');
var url = require('url');
var util = require('util');

http.createServer( function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});

        // 解析 url 参数
        var params = url.parse(req.url, true).query;
        res.write('网站名：' + params.name);
        res.write('\n');
        res.write('网站url：' + params.url);
        res.end();
}).listen(3000);

// 访问  http://localhost:3000/user?name=CJY&url=www.baidu.com 查看结果
