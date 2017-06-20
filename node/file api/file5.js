// 读取文件  fs.read(fd, buffer, offset, length, position, callback)
// fd 通过 fs.open() 返回的文件描述符; buffer 缓冲区; offset 缓冲区写入的写入偏移量; length 从文件中读取的字节数; position 文件读取的起始位置, 如果position值为 null, 则会从当前文件指针的位置读取; callback 三个参数, err（错误信息）, bytesRead（读取的字节数）, buffer（缓冲区对象）

var fs = require('fs');
var buf = new Buffer(1024);

console.log('准备打开已存在的文件');

fs.open('input.txt', 'r+', (err, fd) => {

	if(err) {
		return console.error(err);
	}
	console.log('文件打开成功');
	console.log('准备读取文件');

	fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {

		if(err) {
			console.log(err);
		}

		console.log(`${bytes}  字节数被读取`);
	
		// 仅输出读取的字节
		if(bytes > 0) {
			console.log(buf.slice(0, bytes).toString());
		}
	});
});





