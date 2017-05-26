// promise.then 返回的是一个 promise 而不是结果
// 要 resolve 或 reject 之后才有回调事件
// 回调的结果通过参数来传递
// Promise.then()

let delay = function(m) {
	return new Promise(function(resolve, reject) {
		setTimeout(resolve,m);
	});
}

delay(1000).then(function() {
		return 5;
	})
	.then(function(value) {
		console.log(value);
	});