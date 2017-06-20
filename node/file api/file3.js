// 获取文件信息 fs.stat(path, callback)
// path 路径; callback 回调函数, callback(err, stats), stats是 fs.Stats 对象
var fs = require('fs')

fs.stat('E:/CY/node/file api/file3.js', (err, stats) => {

	console.log(stats.isFile()); // true
});


//	demo
console.log('准备打开文件')

fs.stat('input.txt', (err, stats) => {
	
	if(err) {

		return console.error(err);
	}
	console.log(stats);
	console.log('读取文件信息成功!');

	// 检查文件类型
	console.log(`是否为文件？ ${stats.isFile()}`)
	console.log(`是否为目录？ ${stats.isDirectory()}`)
});







