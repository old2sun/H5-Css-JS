// 异步对象
// new Promise(fn)

// 传统的异步执行程序是一个回调地狱
function task(i) {console.log(`task_${i} 执行完毕`)}

setTimeout(function() {
	task(1);
	setTimeout(function() {
		task(2);
	},1000);
},1000);


// 这是一个简单的 Promise 实例 和 例子
// 通过实例化 Promise 通过 resolve 或 reject 方法执行动作
// promise = new Promise(function() {});

function delay(interval) {
	return new Promise(function(resolve) {
		setTimeout(resolve, interval);
	});
};

var oneSecondDelay = delay(1000);