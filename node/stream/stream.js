/*
*	node.js的流一般有四种类型:可读操作;可写操作;可读可写;操作被写入数据，返回结果
*	所有stream对象都是 EventEmiiter 实例,常用事件有：
*	data,有数据可读时触发;end,没更多数据可读时触发;error,发生错误时触发;finish,所有数据已被写入到底层系统时触发
*/

// 从流中读取数据 
var fs = require('fs');
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt')
// 设置编码
readerStream.setEncoding('UTF8');
// 处理流事件 data ,end, error
readerStream.on('data',function(chunk){
	data += chunk;
});
readerStream.on('end',function(){
	console.log(data);
});
readerStream.on('error',function(err){
	console.log(err.stack);
});
console.log("程序执行完毕")