/*
	async 函数返回一个 Promise 对象

	它内部 return 返回的值, 会成为  then 方法回调的参数
*/ 

// demo1
async function f() {
	return 'helloween';
}

f().then(v => console.log(v))



// demo2,  函数内部抛出错误, 会导致返回的 promise 对象 变为 reject 状态。抛出的错误对象会被 catch 方法接收到
async function fo() {
	throw new Error('出错了');
}

f().then(
	v => console.log(v),
	e => console.log(e)
)