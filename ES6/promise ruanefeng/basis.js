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



//  实现 Ajax 操作 
var getJSON = function(url) {

  var promise = new Promise(function (resolve, reject) {

    var client = new XMLHttpRequest();

    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
      
        return;
      }
      if(this.status === 200) {
      
        resolve(this.response);
      } else {

        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

getJSON("posts.json").then(function(json) {

  console.log(`Contents：${json}`)  // Contents：[object Object]

}, function(error) {

  console.error("出错了", error);
});





