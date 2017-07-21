// 使用中间件向 node.js 服务器发送 cookie 信息
var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
	console.log('cookies: ', req.cookies)
})

app.listen(8081)

// 访问 http://127.0.0.1:8081