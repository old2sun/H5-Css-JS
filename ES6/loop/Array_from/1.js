// Array.from 把类数组或可遍历对象转为数组
// Array.from(arrayLike[, fn, [this]]), 第二个参数是函数体, 第三个是 fn 的this


let arrayLike = {
	'0' : 'a',
	'1' : 'b',
	'2' : 'c',
	length: 3
}

// ES5
var arr1 = [].slice.call(arrayLike); // [ 'a', 'b', 'c' ]

// ES6
let arr2 = Array.from(arrayLike);	//	[ 'a', 'b', 'c' ]


// 只要是部署了Iterator 接口的数据结构, 都可以转为数组
Array.from('Hello cai');	// [ 'H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'i' ]

let namesSet = new Set(['jack','jack','tom']);

Array.from(namesSet) // [a,b]


// 与 map 方法相似
Array.from ([1,1,2], (x) => x * x); // [1,1,4]
Array.from ([1,1,2]).map( (x) => x * x); // [1,1,4]


let a = Array.from ({length:2}, (x) => x * x); // [1,1,4]

console.log(a)



