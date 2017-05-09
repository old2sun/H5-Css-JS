// 缓冲区裁剪
// 格式, buf.slice([start[, end]])
var buffer1 = new Buffer('noob');
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content:"+ buffer2.toString());