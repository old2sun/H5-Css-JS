// process 有很多API, 详情翻阅手册....

// stdout 标准的输出流
process.stdout.write('Hello process' + '\n');

// argv 返回一个数组
process.argv.forEach((val, index, array) => {
	console.log(index + ': ' + val);
});

// execPath 当前脚本的绝对路径
console.log(process.execPath);

//  platform 系统信息
console.log(process.platform);

//  version 输出当前版本
console.log('当前版本' + process.version);

// cwd()输出当前目录
console.log('当前目录：' + process.cwd()); 

// memoryUsage() 输出内存使用情况
console.log(process.memoryUsage());

