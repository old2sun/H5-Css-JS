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

	console.log("hi, baby");
}
setInterval(printHi, 2000);


/*
	console 的方法
	
	console.log() 
	console.info() 与 console.log 类似
	console.error()  输出错误信息
	console.warn()  输出警告信息
	console.dir()  检查对象
	console.time()  输出时间, 表示计时开始
	console.timeEnd()  结束时间, 表示计时结束
	console.trace()  检查执行的代码在堆栈中的调用路径
	console.assert()  判断某个表达式或变量是否为真
*/ 


