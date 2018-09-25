/*
	await 命令

	正常情况 await 命令后面是一个 Promise 对象。 如果不是, 会被转成一个立即 resolve 的 promise 对象
*/ 

// demo1, await 命令的参数数值是123, 被转成 Promise 立即 resolve
async function f() {
	return await 123;
}
f().then(v => console.log(v));


// demo2, await 命令后面 Promise 对象为 reject, 则reject 的参数, 会被 catch 方法的回调函数接收到.
async function fo() {
	await Promise.reject('出错了');
}

fo().then(v => console.log(v))
.catch(e => console.log(e))



// demo3, 只要有一个 await 语句后面的  Promise  
async function f2() {
	await Promise.reject('error');
	await Promise.resolve('nice');
} 







