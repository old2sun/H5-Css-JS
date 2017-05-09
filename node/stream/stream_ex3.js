// 链式流,就是管道操作，和gulp的处理相近
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
// 压缩文件流
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成");

