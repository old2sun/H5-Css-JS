// 通过 post 提交输出数据

var http = require('http');
var querystring = require('querystring');

var postHTML =
`<html>
    <head>
        <meta charset='utf-8' />
        <title>表单post提交demo</title>
    </head>
    <body>
        <form method='post'>
            网站名：<input name='name' />
            网站 URL：<input name='url' />
            <input type="submit" />
        </form>
    </body>
<html/>`

http.createServer(function (req, res) {

    var body = '';

    req.on('data', function(chunk) {

        // 暂存请求体信息
        body += chunk;
    });

    req.on('end', function() {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

        if(body.name && body.url) {

            res.write(`网站名：${body.name}
                网站URL：${body.url}`);
        } else {

            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);

// 访问  http://localhost:3000 
