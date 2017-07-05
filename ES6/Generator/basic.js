/*
	Generator 函数可以是一个状态机, 封装了多个内部状态 .

	Generator 函数返回一个遍历器对象, 即函数除了状态机, 还是一个遍历器对象生成函数。
	返回的遍历器对象 , 可以依次遍历 Generator 函数内部的每一个状态

	Generator 有两个特征. 一是关键字与函数名之间的星号; 
	二是函数体内部使用 yield 表达式, 定义不同的内部状态
*/ 

function* helloGenertor() {
	yield 'hello';
	yield 'world';
	return 'ending';
}

var hg = helloGenertor();

hg.next();  // { value: 'hello', done: false }
hg.next();  // { value: 'world', done: false }
hg.next();  // { value: 'ending', done: true }
hg.next();  // { value: undefined, done: true }



