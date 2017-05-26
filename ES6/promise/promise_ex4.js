// 把第一个异步例子用 promise 执行
function task(i) {console.log(`task_${i} 执行完毕`)}

task(0);
// setTimeout(function() {
// 	task(1);
// 	setTimeout(function() {
// 		task(2);
// 	},1000);
// },1000);


// promise
let action = (s) => {
	return new Promise( (resolve, reject) => {
		setTimeout(resolve,s);
	} );
};

action(1000).then(function() {
	task(1)
	return action(1000);
})
.then(function(){
	task(2);
});

/*
*	总结 : 固定格式, resolve, reject 是执行动作, 传进参数 s 是秒,
*	let action = (s) => {
*		return new Promise( (resolve, reject) => {
*			setTimeout(resolve,s);
*		} );
*	};
*
*/