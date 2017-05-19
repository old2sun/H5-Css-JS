// let 定义变量, 但不会变量提升, 并且会有块级作用域
// const 也是定义的变量是一个常量, const 不能改变本身的内容, 但改变对象的指引地址是不会报错

// let 与 var 例子
var a = [];
for (var i = 0; i < 5; i++) { // var
	a[i] = function() {
		console.log(i);
	};
}
a[1](); // 所有函数输出都是5, 变量被全局污染

var a = [];
for (let i = 0; i < 5; i++) { // let
	a[i] = function() {
		console.log(i);
	};
}
a[1](); // 块级作用域的作用, 不会新值覆盖旧值



