/*
	协程的 Generator 函数实现

	整个 Generator 函数就是一个封装的异步任务, 或者异步任务的容器

	异步操作需要暂停的地方, 都用 yield 语句注明
*/ 

// dmo1
function *gen(x) {
	var y = yield x + 2;
	return y;
}

var g = gen(1)

g.next()	// { value: 3, done: false }
g.next(1)	// { value: 1, done: true }      被 y 值收住
g.next()	// { value: undefined, done: true }


// demo2, 捕获异常
function* wrongMessage(x) {
	try {
		var y = yield x + 2;
	} catch (e) {
		console.log(e)
	}
	return y;
}
var wM = wrongMessage(1);
wM.next()
wM.throw(' error ')


