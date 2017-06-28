/*
	
	格式：
	Promise.all([p1, p2, p3]);

	Promise.all 方法用于将多个 Promise 实例包装成一个新的 Promise 实例。
	它接受一个数组作为参数, p1、p2、p3 都是 Promise 实例, 如果不是就会先
	调用 Promise.resolve 方法, 将参数转为 Promise 实例。

	Promise.all 方法的参数可以不是数组, 但必须具有 Iterator 接口, 且返回的每个成员第一是  Promise 实例
*/ 

// var p = Promise.all([p1, p2, p3]);