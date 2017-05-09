// 把Buffer实例转换JSON对象 
var buf = new Buffer('www.baidu.com');
var json = buf.toJSON(buf);
console.log(json);
 /*	输出的json对象	
 *	{ type: 'Buffer',
 * 	data: [ 119, 119, 119, 46, 98, 97, 105, 100, 117, 46, 99, 111, 109 ] }
 */ 