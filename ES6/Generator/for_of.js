/*
	for...name 自动遍历 generator 函数生成的 iterator 对象, 且此时不再需要调用next方法
*/ 


// demo1
function *foo() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	return 6;
}

for (let v of foo()) {
	// console.log(v);

	// 1 2 3 4 5
}



// demo2
function* fibonacci() {
	let [prev, curr] = [0, 1];
	for(;;) {
		[prev, curr] = [curr, prev + curr]
		yield curr;
	}
}

for (let n of fibonacci()) {
	if (n > 1000) break;
	// console.log(n);
}



// demo 3, 对象原生不具备 Iterator 接口, 无法用 for...if 遍历. 需要特别处理

function* objectEntries(obj) {
	let propKeys = Reflect.ownKeys(obj);

	for (let propKey of propKeys) {
		yield [propKey, obj[propKey]]
	}
}

let jane = {first: 'jange', last: 'Doe'};

for (let [key, value] of objectEntries(jane)) {
	// console.log(`${key}: ${value}`)

	// first: jange
	// last: Doe
}



// demo4, 拓展运算符、结构赋值和Arrat,from 调用的都是遍历器接口
function * number() {
	yield 1
	yield 2
	return 3
	yield 4
}

[...number()]	// [1, 2]    拓展运算符号

Array.from(number())  // [1, 2]    Array.frm
	
let [x, y] = number();  // 1, 2  解构赋值
	
for(let n of number()) {  循环
	// console.log(n)	// 1, 2
}
