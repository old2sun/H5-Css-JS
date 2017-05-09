// 读取缓冲区的数据
/*
*	 读取格式: buf.toString([encoding[, start[, end]]]),中括号可选填
*	encoding 为使用编码解析,默认UTF-8;start 指定开始读取的索引位置,默认为0; end 结束位置，默认缓冲区末尾
*/
var buf = new Buffer(26);
for(var i=0;i<buf.length;i++){
	buf[i] = i+97
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf-8',0,5));
console.log(buf.toString(undefined,0,5)); // undefined 也是默认utf-8
