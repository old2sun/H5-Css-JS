/*
	Request 对象表示一次 fetch 调用的请求信息。
	传入 Request 参数来调用 fetch, 可以执行很多自定义请求的高级用法。（自行百度）
	
	格式：new Requset(url, option)
*/ 

// demo 创建 Request 对象包装请求头
// var request = new Request('/some-url', {
// 	headers : new Headers({
// 		'Content-Type': 'text/plain'
// 	})
// });
// fetch(request).then(function(){ /*...*/ })


/*
	demo2  
	Request只有第一个参数是必需的。对象创建完成之后, 所有的属性都变为只读属性.
*/ 
// var request = new Request('/users.json', {
// 	method: 'POST',
// 	mode: 'cors',
// 	redirect: 'follow',
// 	headers: new Headers({
// 		'Content-Type': 'text/plain'
// 	})
// });
// fetch(request).then(function(){ /*...*/ });


// fetch 的方法, 和 Request 相似
fetch('/users.json', {
	method: 'POST',
	mode: 'cors',
	redirect: 'follow',
	headers: new Headers({
		'Content-Type': 'text/plain'
	})
}).then(function(){ /*...*/ });