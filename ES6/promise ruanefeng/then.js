/*
	Promise.prototype.then(resolve [, reject])
	then 第一个参数是 Resolved 状态的回调函数, 第二个可选, 是 Rejected 状态的回调函数
	
	then 方法返回是一个新的 Promise 实例（但不是原来那个 Promise实例）。可以采用链式写法
*/

// 链式 demo , 从 resolve 函数开始传递参数结果
var demo = function (str) {

	var promise = new Promise( function (resolve, reject) {

		resolve(str);
	} );

	return promise;
};

demo('i can play').then(function(words) {

	return words + 'code';
}).then( function(strw) {

	console.log(strw);
});