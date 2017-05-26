// 实例化 promise
let promise = new Promise(function() {});


// promise 成功回调
promise.then(function(details){
	// code
});

// 失败的回调 
promise.then(null, function(error) {
	// code
});

// 同时处理成功和失败, 貌似不行
promise.then(
	function(details) { /*code*/ },
	function(error) { /*code*/ }
);