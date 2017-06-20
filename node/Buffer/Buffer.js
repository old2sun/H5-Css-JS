// node.js Buffer,缓冲区，专门存放二进制数据的区域。

// 创建长度为 10 字节的 Buffer 实例
var buf = new Buffer(10);
// 通过给定的数组创建 Buffer 实例
var buf_2 = new Buffer([10,20,30,40]);
// 通过字符串创建(utf-8是默认编码，可以用其它编码)
var buf_3 = new Buffer('www.baidu.com','utf-8');

