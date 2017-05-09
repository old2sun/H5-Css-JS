// 合并 Buffer 实例
// 格式， Buffer.concat(list[, totalLength])  list是合并对象的数组，totalLength是指定合并后的长度
var buffer1 = new Buffer('百度一下');
var buffer2 = new Buffer('www.baidu.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容:" + buffer3.toString());