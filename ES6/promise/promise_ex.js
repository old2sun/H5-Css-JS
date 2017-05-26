// 建立 Promise 但还没 handle it
// 执行 resolve 或 reject , 为回调铺垫

function taskTimeout(step, interval) {
	new Promise(function(resolve, reject) {
		if (taskSupported(step)) {
			setTimeout(resolve, interval);
		} else {
			reject('task is not supported');
		}
	});
};

// 如果执行这个方法就会执行 reject()
// function taskSupported(num) {
// 	console.log(`walk ${num}`);
// };

let task = taskTimeout(1, 1000);



// 可以用 try catch 语句
var promise = new Promise(function(resolve, reject){
	try {
		adddlert("Welcome guest!")
	}
	catch (e) {
		reject(e);
	}
});