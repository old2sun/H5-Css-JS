var express = require('express');
var app = express();
var fs = require('fs');

var id = 2;

app.get('/delUser', function(req, res) {

	// 先读取存在用户
	fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
		data = JSON.parse( data );
		delete data['user' + 2];

		console.log(data);
		res.end( JSON.stringify(data) );
	});
})

var server = app.listen(8081, function() {
	var host = server.address().address
	var port = server.address().port

	console.log('应用实例, 访问地址 http://%s:%s', host, port)
})

// 访问 http://127.0.0.1:8081/listUsers