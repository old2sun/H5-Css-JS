/*
	generator 有一个 return 方法, 返回给点的值, 并且终止遍历
*/ 

/*
	demo1	

	return 方法之后再调用 next 值总是 undefined, 状态总是 true

	如果 return 不提供参数, 值返回 undefined
*/ 
function* foo() {
	yield 1
	yield 2
	yield 3
	yield 4
}

var f = foo();
f.next()  // { value: 1, done: false }
f.return('666')  // { value: '666', done: true }
f.next() // { value: undefined, done: true }
