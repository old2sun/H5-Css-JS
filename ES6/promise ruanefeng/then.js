/*
	Promise.prototype.then(resolve [, reject])
	then 第一个参数是 Resolved 状态的回调函数, 第二个可选, 是 Rejected 状态的回调函数
	
	then 方法返回是一个新的 Promise 实例（但不是原来那个 Promise实例）。可以采用链式写法
*/

// 链式 demo , 从 resolve 函数开始传递参数结果
var demo = function (str) {

	var promise = new Promise( function (resolve, reject) {

		if(str) {
			
			resolve(str);

		} else {

			// reject(new Error('fail'));
			
		}
	} );

	return promise;
};

demo('i can play').then(function(words) {

	return words + 'code';

}).then( function(strw) {

	// console.log(strw); // i can playcode

});

/*
	解析: 
	上面代码使用 then 方法, 依次指定两个回调函数。回调函数 resolve 函数完成后, 将返回结果作为参数, 传入第二个回调函数。
	采用链式 then , 可以指定一组按照次序调用的回调函数。这时, 前一个回调函数有可能返回 Promise 对象,
	后一个回调函数, 就会等待该 Promise 对象状态发射变化才会被调用
*/


demo().then(function(words) {

	return words + 'code';

}).then( function funcA(strw) {

	console.log(strw);

}).then( function funcB(err) {

	console.log('reject：', err);
	// UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): Error: fail

});

/*
	解析：
	第一个 then 指定的回调函数返回的是另一个 Promise 对象。这时, 第二个 then 方法指定的回调函数, 
	就会等待这个新的 Promise 对象状态发生变化。如果 Resolved 调用  funcA, 如果 Rejected , 调用 funcB
*/ 

