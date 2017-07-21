/*
	node.js 时以单线程模式运行, 但它使用的是事件驱动处理并发, 这样有助于我们在多核 cpu 的系统上创建多个子进程。

	每个子进程总是带有三个流对象：child.stdin, childstdout, child.stderr. 它们可能共享父进程的 stdio 流, 或独立的被导流的流对象

	child_process 模块创建子进程方法有：
	exec, 缓存子进程输出, 并将子进程的输出以回调函数参数的形式返回.
	spawn, 使用指定命令行参数创建新进程
	fork, 用于在子进程中运行的模块.

	更详细的参数自行百度
*/	


// exac 方法返回最大缓冲区, 并等待进程结束, 一次性返回缓冲区的内容

const fs = require('fs');
const child_process = require('child_process');

for( var i=0; i<3; i++ ) {
	var workerProcess = child_process.exec('node support.js '+i, function(error, stdout, stderr) {
		if (error) {
			console.log(error.stack);
			console.log('Error code' + error.code);
			console.log('Signal received' + error.signal);
		}
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
	});

	workerProcess.on('exit' , function(code) {
		console.log('子进程退出, 退出码：'+ code);
	});
}