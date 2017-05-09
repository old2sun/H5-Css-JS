// 管道流
var fs = require('fs');
// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');
// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');
// 管道读写操作
// 读取 input.txt  内容并把它写入 output.txt
readerStream.pipe(writerStream);
console.log('程序执行完毕');