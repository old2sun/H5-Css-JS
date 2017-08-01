/*
	yield* 表达式

	如果在 generator 内部调用另一个 generator函数, 默认情况下是没效果的

	yield*表达式 可解决这种默认情况

	yield* 后面的 Generator 函数没有 return 语句, 等同于在内部部署了一个 for...of 循环
*/ 


// demo1 , 在 Generator 里调用另一个 Generator 没有效果， 需要用到 yield*表达式 
function* foo() {
	yield 'a';
	yield 'b';
}

function* bar() {
	yield 'x';
	foo();
	yield 'y';
}

for (let v of bar()) {
	// console.log(v);

	// x
	// y
}



// demo2
function* bar2() {
	yield 'x';
	yield* foo();
	yield 'y';
}

// 等同于
function* b() {
	yield 'x';
	yield 'a';
	yield 'b';
	yield 'y';
}

// 等同于
function* bar3() {
	yield 'x';
	for (let v of foo()) {
		yield v;
	}
	yield 'y';
}
for (let v of bar3()){
	// console.log(v)

	// x
	// a
	// b
	// y
}



// demo 3 
function *inner() {
	yield 'hello!';
}

function* outer1() {
	yield 'open';
	yield inner();
	yield 'close';
}

var gen1 = outer1()
gen1.next().value // open
gen1.next().value // 返回一个遍历器对象
gen1.next().value // close


function* outer2() {
	yield 'open';
	yield* inner();
	yield 'close';
}

var gen2 = outer2();
gen2.next().value // open
gen2.next().value // hello!
gen2.next().value // close



// demo 4
let delegatedIterator = (function* () {
	yield 'Hello!';
	yield 'Bye!';
}());

let delegatingIterator = (function *() {
	yield 'Greetings'
	yield *delegatedIterator
	yield 'OK, bye';
}());

for(let value of delegatingIterator) {
	// console.log(value);

	// Greetings
	// Hello!
	// Bye!
	// OK, bye
}



// demo 5
function* concat (iter1, iter2) {
	yield* iter1;
	yield* iter2;
}

// 等同于 
function*concat (iter1, iter2) {
	for (var value of iter1) {
		yield value;
	}
	for (var value of iter2) {
		yield value;
	}
}



// demo4, yield 跟数组, 会遍历数组成员, 不加星号是返回整个数组
function* g() {
	yield* ['a', 'b', 'c'];
}

g().next()	// { value: 'a', done: false }
