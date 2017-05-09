var fs = require('fs');
//	fs.readFile() 为异步函数读取文件
var data = fs.readFile('input.txt',function(err,data){
	// if(err) return console.error(err);
	if(err){
		// 如果读取文件错误，err 对象会发送错误信息
		console.log(err.stack);
		return
	}
	// 如果没发送错误，readFile 会跳过 err 输出，通过回调函数输出文件内容
	console.log(data.toString());
});
console.log('程序结束');