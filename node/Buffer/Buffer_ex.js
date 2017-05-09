// 数字写入缓冲区，如果空间不足只会写入部分数据
/*
*	 写入格式: buf.write(string[, offset[, length]][, encoding]),中括号可选填
*	string 为字符串, offset 开始写入的索引值，默认为0;
*	length 写入的字节数,默认 buffer.length; encoding 为使用编码,默认UTF-8
*/
var buf = new Buffer(256);
var len = buf.write("www.baidu.com");
console.log("写入字数"+len);
