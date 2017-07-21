var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Express应用实例3， 访问地址://%s:%s', host, port)
});

// 访问：http://127.0.0.1:8081/img/1.jpg
