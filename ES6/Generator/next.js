/*
	next 方法参数

	yield 表达式本身没有返回值, 或者说总是返回 undefined.
	next 方法可以带一个参数, 该参数就会被当作上一个 yield 表达式的返回值

*/ 


/*
	demo1

	若果next 方法没有参数, 每次运行到 yield表达式, 变量 reset 的值 总是 undefined.
	当 next 方法带一个参数 true 时, 变量 reset 就被重置为这个参数（即 true), 因此 
	i 会 等于 -1 , 下一轮循环就会从 -1 开始循环
*/ 
function* f() {
	for (var i = 0; true; i++) {
		var reset = yield i;
		if(reset) { i = -1; }
	}
}

var g = f();

g.next();	//{ value: 0, done: false }
g.next();	//{ value: 1, done: false }
g.next(true);	//{ value: 0, done: false }


// demo2
function* foo(x) {
	var y = 2 * (yield (x + 1));
	var z = yield (y / 3);
	return (x + y +z)
}

var a = foo(5);
a.next() // { value: 6, done: false }
a.next() // { value: NaN, done: false }
a.next() // { value: NaN, done: true }

var b = foo(5)
b.next() // { value: 6, done: false }
b.next(12) // { value: 8, done: false }
b.next(13) // { value: 42 done: true }



// demo 3 
function* dataComsumer() {
	// console.log('Started')
	// console.log(`1.${yield}`)
	// console.log(`2.${yield}`)
	return 'result'
}

let genObj = dataComsumer();
genObj.next() // Started
genObj.next('a')  // 1.a
genObj.next('b')  // 2.b
