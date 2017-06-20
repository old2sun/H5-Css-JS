// 截取文件 fs.ftruncate(fd, len, callback)
// fd 通过 fs.open() 返回的文件描述符; len 文件内容截取长度; callback 回调函数


var fs = require('fs');
var buf = new Buffer(1024);

console.log('准备打开已存在的文件');

fs.open('input.txt', 'r+', (err, fd) => {

	if(err) {
		return console.error(err);
	}
	console.log('文件打开成功');
	console.log('截掉4字节后的文件内容');

	// 截掉文件
	fs.ftruncate(fd, 4, (err)=>{

		if(err) {
			console.log(err);
		}
		console.log('文件截取成功');
		console.log('读取相同的文件');

		fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {

			if(err) {
				console.log(err);
			}

		
			// 仅输出读取的字节
			if(bytes > 0) {
				console.log(buf.slice(0, bytes).toString());
			}

			// 关闭文件
			fs.close(fd, (err) => {
				
				if(err) {
					console.log(err);
				}
				console.log('文件关闭成功')
			});
		});
	});
});





