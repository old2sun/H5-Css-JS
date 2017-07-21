// 返回的对象除了拥有 childProcess 实例的所有方法, 还有一个内建的通信信道

const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
	var work_prodess = child_process.fork('support.js', [i]);

	work_prodess.on('close', function(code) {
		console.log('子进程已退出, 退出码 ' + code);
	});
}