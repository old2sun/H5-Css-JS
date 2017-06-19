// 全局对象

// 输出全局变量 __filename 的值, 表示当前路径
console.log(__filename)

//  __dirname, 当前目录
console.log(__dirname)

// 两秒后执行函数 
function printHello() {

	console.log("Hello, Bear");
}
setTimeout(printHello, 2000);


// 清楚定时器
function print() {

	console.log('prints')
}
var t = setTimeout(print, 2000);
clearTimeout(t);


function printHi() {
	setInterval()
}
