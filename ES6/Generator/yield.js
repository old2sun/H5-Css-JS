/*
	yield 其实提供一种可以暂停执行的函数。yield 表达式就是暂停标志

	遇到 yield 表达式, 暂停执行后面的操作, 并将紧跟在 yield 后面的那个表达式的值, 作为返回的对象的 value 属性值。
	下一次调用 next 方法时, 再继续往下执行, 直到遇到下一个 yield 表达式。
	如果没有遇到新的 yield 表达式, 就一直运行到函数结束, 直到 return语句为止, 并将return语句后的表达式的值, 作为返回对象的value 属性值
	如果没有 return语句, 则返回的对象的 value 属性值为 undefined。

	yield 表达式后面的表达式, 只有当调用 next 方法、内部指针指向该语句时才会执行。

	yield 与 return 相似, 但是 return 只能执行一次, 或只能执行一个 return 语句。
	而 yield 能让函数暂停执行, 下一次再从该位置继续向后执行

	yield 表达式只能用在 Generator 函数里面, 用在其他地方都会报错

*/ 


// 这个段代码 yield 后的表达式不会立即求值, 只会在 next 方法将指针移到这一句时, 才会求值。
function* gen() {
	yield 123 + 456
}


/*
	这段代码中, 函数 f 如果都是普通函数, 在为变量 generator赋值时就会执行。
	但是它实际上是 Generator 函数, 只有调用 next 方法时才会执行
*/ 
function* f() {
	console.log('执行了')
}

var generator = f();

setTimeout(function() {
	generator.next()
}, 2000);

