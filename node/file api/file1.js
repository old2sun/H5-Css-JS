// 更多的 文件操作 自行百度


var fs = require('fs');

// 异步读取
fs.readFile('input.txt', (err, data) => {

	if(err) {
		return console.log(err);
	}
	console.log("异步读取"+ data.toString());

});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取" + data.toString());

console.log('程序结束')