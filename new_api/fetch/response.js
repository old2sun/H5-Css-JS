/*
	Response 代表响应, fetch 的  then 方法接收一个 Response实例.
	
	可以手动创建 Response 对象. 配置参数自行百度

	格式 new Response(BODY, OPTIONS)
*/ 

// 手动创建 Response
// var response = new Response('...', {
// 	ok: false,
// 	status: 404,
// 	url: '/'
// });

// fetch 的 then 会传入一个 Response对象
// fetch('/')
// 	.then(function(responseObj) {
// 		console.log('status', responseObj.status);
// 	});


// 处理 JSON响应
// fetch('/arsenal.json').then(function(response){
// 	return response.json();
// }).then(function(j) {
// 	console.log(j);
// });


// 处理基本的 Text/HTML 响应
// fetch('/next/page')
// 	.then(function(response) {
// 		return response.text()
// 	}).then(function(text) {
// 		// ...
// 	});


// 处理 Blob
// 通过 fetch 加载图像或其他二进制数据
// fetch('flowers.jpg')
// 	.then(function(response) {
// 		return response.blob();
// 	})
// 	.then(function(imageBlob) {
// 		document.querySelector('img').src = URL.createObjectURL(imageBlob);
// 	});


// 提交表单数据 demo
// fetch('/submit', {
// 	method: 'post',
// 	body: new FormData(document.getElementById('comment-form'))
// });

// 提交 JSON demo
fetch('/submit-json', {
	method: 'post',
	body : JSON.stringify({
		email: document.getElementById('email').value
		answer: document.getElementById('answer').value
	})
})