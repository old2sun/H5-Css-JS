// demo

var express = require('express');
var app = express();

app.get('/' , function( req, res ) {

    res.send('Hello Wrold');
});

var server = app.listen(8081, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('例子, 访问地址 http://%s:%s', host, port);
});
