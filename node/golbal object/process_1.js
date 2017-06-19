/*
	process 是一个全局变量, 用于描述当前 node.js进程状态的对象 

	exit 进程准备退出时触发
	beforeExit 当 node 清空事件循环, 并且没有其他安排时触发这个事件
	uncaughtException 当一个异常冒泡回到事件循环, 触发这个事件
	Signal 当进程接收到信号是触发
*/ 

// 状态码自行度娘

process.on('exit', (code)=> {

	setTimeout(()=>{
		console.log("该代码不执行");
	}, 0)

	console.log('退出码为', code);
});
console.log('程序执行结束');