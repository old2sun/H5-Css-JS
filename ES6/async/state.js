/*
	Promise 对象状态变化

	async 函数返回的 Promise 对象, 必须等到内部所有 await 命令后面的 Promise 对象执行完, 才会发生状态变化.
	除非遇到 return 或 抛出错误 。 所以 当 async 函数内部异步操作完, 才会执行 then 回调函数
*/ 

async function getTitle(url) {
	let response = await fetch(url);
	let html = await response.text();
	return html.match(/<title>([\s\S]+)<\/title/>/i)[1];
}
getTitle('http://...').then( console.log() )