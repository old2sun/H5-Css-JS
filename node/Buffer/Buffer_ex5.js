// 比较 Buffer 实例
// 格式，buf.compare(otherBuffer) ，不解释
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('AB');
var result = buffer1.compare(buffer2);
if(result<0){
	console.log(buffer1+"在"+buffer2+"之前");
}else if(result==0){
	console.log(buffer1+"与"+buffer2+"相同");
}else{
	console.log(buffer1+"在"+buffer2+"之后");
}