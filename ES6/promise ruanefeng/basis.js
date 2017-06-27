/*
	Promise 是一个构造函数

	它接受两个参数, resolve 和 reject 它们都是函数,  resolve 作用是将 Promise  对象的状态从未完成到成功, 异步操作成功调用时, 并将异步操作的结果作为参数传递出去;
	reject 作用就是状态未完成到失败, 异步操作失败是调用, 并将操作报出的错误, 作为参数传递出去

*/

// 创建promise 实例

var promise = new Promise( function(resolve, reject) {
	// ...code

	if( '异步操作成功' ) {
		resolve(value);
	} else {
		reject(error);
	}
});

/*
	promise 实例生成后可以用 then 方法分别指定 Resolved 状态和 Reject 状态的回调函数。

	then接受两个回调函数作为参数. 第一个回调函数是 Promise 对象的状态变为 Resolved 时调用;
	第二个回调函数是 Promise 对象的状态变为 Rejected 时调用, 第二个函数是可选。
	它们都接受 Promise 对象传出的值作为参数

	Promise 新建后悔立即执行
*/ 

promise.then(function(value) {
	
	// success
}, function(error) {

	// failure
});


//  demo 1
function timeout(ms) {
	return new Promise( function(resolve, reject) {
		setTimeout(resolve, ms, 'done');
	} );
}

timeout(100).then( function(value) {
	// console.log(value);  // done
} )


// demo2 
let p1 = new Promise( function (resolve, reject) {

	// console.log('Promise');
	resolve();
} );

p1.then( function() {

	// console.log('Resolved');
} );

// console.log('Hi!');

// 输出结果：
// Promise
// Hi!
// Resolved

/*
	解析：上面代码Promise 是首先建立的, 所以先输出 Promise;  
	然后 then 方法指定的回调函数, 将在当前脚本所有同步任务执行完才会执行, 
	所以 'Resolved' 最后输出
*/ 



// 异步加载图片例子
function loadImageAsync(url) {

	return new Promise(function(resolve, reject) {

		var image = new Image();

		image.onload = function() {

			// 图片加载成功条用 resolve
			resolve(image);
		};

		image.onerror = function() {

			// 加载失败调用 reject
			reject(new Error(`Could not load image at ${url}`));
		}

		image.src = url; // 获得图片路径
	});
}



//  实现 Ajax 操作 -----------------------------
// var getJSON = function(url) {

//   var promise = new Promise(function (resolve, reject) {

//     var client = new XMLHttpRequest();

//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//     function handler() {
//       if (this.readyState !== 4) {
      
//         return;
//       }
//       if(this.status === 200) {
      
//         resolve(this.response);
//       } else {

//         reject(new Error(this.statusText));
//       }
//     };
//   });

//   return promise;
// };

// getJSON("posts.json").then(function(json) {

//   console.log(`Contents：${json}`)  // Contents：[object Object]

// }, function(error) {

//   console.error("出错了", error);
// });

/*
	代码解析：
	getJSON 是对 XMLHttpRequest 对象的封装, 用于发出一个针对 JSON数据的请求,
	并且返回 Promise 对象。在 getJSON 内部调用 resolve 和 reject 函数时, 都
	带有参数。
	如果调用 reslove 函数和 reject 函数时带有参数, 那么它们的参数会被传递给回调
	函数。
	resolve函数的参数除了正常的值外, 还可能能表示另一个 Promise 实例 。
*/


// resolve 参数 demo
var np1 = new Promise( function (resolve, reject) {
	// ...
});

var np2 = new Promise( function (resolve, reject) {
	// ...
	resolve(np1);
});



// 另一个 demo
var np3 = new Promise(function (resolve, reject) {

	// setTimeout( () => reject(new Error('fail')), 3000 );
});

var np4 = new Promise(function (resolve, reject) {

	setTimeout( () => resolve(np3), 1000 );
});

np4
	.then(result => console.log(result))
	.catch(error => console.log(error)); // fail

/*
	解析：
	np3 是一个 Promise, 3秒后变为 rejected。np4 的状态在一秒后改变,
	resolve 方法返回的是 np3。 由于 np4 返回的是另一个 Promise, 导致
	np4 自己的状态无效, 由 np3 的状态决定 np4 的状态。
	所以, 后面的 then 语句都变成针对后者 (np3)。又过了2秒, 
	np3 变为 rejected , 导致触发 catch 方法指定的回调函数。
*/ 


