// 创建目录 fs.mkdir(path[, mode], callback)
// path 路径;mode 目录权限, 默认0777; callback 没参数

var fs = require('fs');

console.log('创建目录 test/');

fs.mkdir(__dirname+"/test/", (err) => {

	if(err) {
		return console.error(err);
	}
	console.log('目录创建成功');
});


// 删除目录 fs.rmdir(path, callback)
// path 文件路径; callback 回调函数, 没有参数

console.log('准备删除目录 testdir')
fs.rmdir(`${__dirname}/testdir`, (err) => {

	if(err) {
		return console.error(err);
	}
	console.log('读取当前目录');
	fs.readdir(__dirname, (err, files) => {

		if(err) {
			return console.error(err);
		}

		files.forEach((file) => {
			console.log(file);
		});
	});
});












