/*
    使用路由决定由指定脚本响应客户端请求
    可以通过路由提取请求的 url 以及 GET/POST 参数
*/

var express = require('express');
var app = express();

// 主页输出 ’hello world'
app.get('/', function (req, res) {

    console.log('主页 GET 请求');
    res.send('Hello GET');
});


// POST 请求
app.post('/', function (req, res) {

    console.log('主页 POST 请求');
    res.send('Hello POST');
});


//  /del_user 页面响应
app.get('/del_user', function (req, res) {

    console.log('/del_user 响应 DELETE 请求');
    res.send('删除页面');
});


// /list_user 页面的 GET 请求
app.get('/list_user', function (req, res) {

    console.log('/list_user GET 请求');
    res.send('用户列表页面')
});

//  地偶尔，  abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function (req, res) {

    console.log('/ab*cd GET 请求');
    res.send('正则匹配');
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('实例2， 访问地址://%s:%s', host, port)
});

// 访问他们的不同地址查看效果，如：http://127.0.0.1:8081/list_user
