/*
	yield 与 iterator 的关系

	任意一个对象的 Symbol.iterator 方法, 等于该对象的遍历器生成函数, 调用该函数会返回该对象的一个遍历器对象。

	由于 Generator 函数就是遍历器生成函数, 因此可以把 Generator 赋值给对象的 Symbol.iterator 属性, 从而使该对象具有 iterator 接口
*/ 

// demo1
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
	yield 1;
	yield 2;
	yield 3;
}
var result = [...myIterable] // [1, 2, 3]


// demo2
function* gen() {
	// some code
}
var g = gen();
g[Symbol.iterator]() === g; // true

