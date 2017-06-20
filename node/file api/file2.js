// 异步模式下打开文件格式  fs.open(path, flags[, mode], callback)
// path 路径; flags 文件打开的行为（类似方式）, 详情度娘; mode 设置文件模式(权限); callback 回调函数,带两个参数, callback(err, fd)


var fs = require('fs');

// 异步打开文件
console.log('准备打开文件');

fs.open('input.txt', 'r+', function(err, fd) {

	if(err) {
		return console.error(err);
	}
	console.log('文件打开成功')
});






