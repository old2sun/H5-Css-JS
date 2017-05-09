// 链式流
var fs = require('fs');
var zlib = require('zlib');

// 解压文件
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('jieya.txt'));

console.log('解压完成并重命名文字');