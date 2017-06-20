// 删除 fs.unlink(path, callback)
// path 路径; callback 无参数


var fs = require('fs');
fs.unlink('input.txt', (err) => {

	if(err) {
		return console.error(err);
	}
	console.log('文件删除成功！')
});





