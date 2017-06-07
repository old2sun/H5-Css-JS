// 简单使用 then
let p1 = new Promise(function(resolve,reject) {
	resolve('success');
	// reject('Error');
});

p1.then(function(value) {
	console.log(value); // success
},function(reason) {
	console.log(reason) // Error
});


//-----------------------------------------------

Promise.resolve("foo")

.then(function(string) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
		
			string += 'bar';
			resolve(string);
		
		}, 1);
	});
})
.then(function(string) {
	setTimeout(function() {
		
		string += 'baz';
		console.log(string + '异步'); // foobarbaz

	}, 1);
	return string; // foobar
})
.then(function(string) {
	// 此时的 string 不存在 barz, 因为 footbarbaz 是发生在 setTimeout 模拟的异步函数中, 最后执行的
	console.log(string + '同步');	// foobar
});




