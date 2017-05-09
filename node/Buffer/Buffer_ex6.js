// Buffer 实例拷贝
// 格式，buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
// targetBuffer,需要拷贝的对象,
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content:"+buffer2.toString());