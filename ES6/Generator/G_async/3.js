/*
	Thunk 函数

	它是自动执行 Generator 函数的一种方式

	JS 的 Thunk 是替换的是多参数函数
*/ 


// 它的含义, 将参数放到一个临时函数中, 再把这个临时函数传入函数体
function f(m) {
	return m * 2;
}

f(x + 5);

// 等同于
var thunk = function() {
	return x + 5;
};
function f(thunk) {
	return thunk() * 2;
}

