// Promise.all([])  立即执行所有函数

function task(i) {console.log(`task_${i} 执行完毕`)}
function mission(i) {console.log(`mission${i} complete`)}
function final() {console.log(`END`)}

Promise.all([task(0),mission(0)])
	.then( () => {
		final();
	});

// Promise.relove(value) 成功调用，返回一个 promise 对象
new Promise((resolve) => {

	resolve(['succes',1,2,3]);

}).then((value) => {
	
	console.log(value[0]);
	
	return value;
});

// Promise.reject(value) // 返回一个被拒绝的 promise
new Promise((resolve, reject) => {
	reject(new Error('fail'));
}).then(
	(error) => {/*不作为*/},
	(error) => {console.log(error);}
);