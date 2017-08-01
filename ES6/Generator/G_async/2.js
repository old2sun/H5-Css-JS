// demo1,  异步任务的封装

var fetch = require('node-fetch');

function* gen() {
	var url = 'http://......';
	var result = yield fetch(url);
	console.log(result.bio);
}

// 执行代码
var g = gen();
var result = g.next();

result.value.then(function(data) {
	return data.json();
}).then(function(data){
	g.next(data);
});


