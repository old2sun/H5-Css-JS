/*
	anysc 函数

*/ 


// demo1 
// 函数返回一个Promise 对象, 可以使用 then 添加回调函数, 函数执行时, 遇到 await 会先返回, 等到异步操作完成, 在执行函数体后面的语句
async function getStockPriceByName(name) {
	var symbol = await getStockSymbol(name);
	var stockPrice = await getStockPrice(symbol);
	return stockPrice;
}

getStockPriceByName('goog').then(function(result) {
	console.log(result);
})



// demo2
function timeout(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	})
}

async function asyncPrint(value, ms) {
	await timeout(ms);
	console.log(value);
}

asyncPrint('hello world', 50)



// async 有多种使用形式
// 函数声明
async function f1() {} 

// 函数表达式
const f2 = async function() {}

// 对象的方法
let obj = { async foo() {} };
obj.foo().then( ... )

// class 的方法
class Storage {
	constructor() {
		this.cachePromise = caches.open('avatars');
	}

	async getAvatar(name) {
		const cache = await this.cachePromise;
		return cache.match(`/avatars/${name}.jpg`);
	}
}
const storage = new Storage();
Storage.getAvatar('jack').then( ... );

// 箭头函数
const foo = async() => {};