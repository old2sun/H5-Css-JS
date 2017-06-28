// Promise.prototype.catch() 方法是 .then(null, rejection)的别名, 用于指定发生错误时的回调函数
var demo = function (str) {

	var promise = new Promise( function (resolve, reject) {

		if(str) {
			
			resolve(str);

		} else {

			reject('fail');
			
		}
	} );

	return promise;
};

// 如果状态 Resolved , 调用 then 指定方法 , 如果异步操作发生错误, 状态为 Rejected , 就会调用 catch 方法指定这个回调函数
demo().then( words => console.log(words) )
	.catch( error => console.log('发生错误', error) );
	// .catch() 等同于  .then(null, error => console.log('发生错误', error) )




// catch 错误的各种写法
// demo1
var promise = new Promise( function(resolve, reject) {

	throw new Error('test');

});
promise.catch( function(error) {

	// console.log(error);  // Error: test

} );


// demo2
var pc1 = new Promise(function(resolve, reject) {
	try {
		throw new Error('wrong');
	} catch(e) {
		reject(e);
	}
});
pc1.catch( function(error) {
	// console.log(error);
});

// demo3
var pc2 = new Promise(function(resolve, reject) {
	reject(new Error('wrong test'));
});
pc2.catch(function(error) {
	// console.log(error);
});


// 如果状态已经为 Resolved, 再抛出错误是无效---------------
// 因为 Promise 的状态一旦改变就永久保持该状态, 不会再变
var p = new Promise(function(resolve, reject) {
	resolve('ok');
	throw new Error('test');
});
p.then(function(value) {console.log(value)}).catch(function(error) {console.log(error)});




