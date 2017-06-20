// 写入文件 fs.writeFile(file, data[, options], callback)
// file 文件名或文件描述符号; data 写入的数据; options 该参数是一个对象, 包含{encoding, mode, flag}; callback 只包含参数 err

var fs = require('fs');

console.log('准备写入文件');
fs.writeFile('input.txt', '我是数据！！！', (err) => {

	if(err) {
		return console.error(err);
	}
	console.log('数据写入成功');
	console.log('---------分割线----------');
	console.log('读取写入数据');

	fs.readFile('input.txt', (err, data) => {

		if(err) {
			return console.error(err);
		}
		console.log(`异步读取文件数据：${data.toString()}`);
	});

});












