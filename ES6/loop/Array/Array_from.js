// Array.from 把类数组或可遍历对象转为数组
// Array.from(arrayLike[, fn, [this]]), 第二个参数是函数体, 第三个是 fn 的this
// 返回值, 一个新的数组实例


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

// 循环数组、 字符串
const bar = ['old','2','sun'];
const str = 'caijunye';

Array.from(['old','2','sun']);	// [ 'old', '2', 'sun' ]
Array.from(str);	// [ 'c', 'a', 'i', 'j', 'u', 'n', 'y', 'e' ]



// 只要是部署了Iterator 接口的数据结构, 都可以转为数组
Array.from('Hello cai');	// [ 'H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'i' ]

let namesSet = new Set(['jack','jack','tom']);

Array.from(namesSet) // [a,b]


// 与 map 方法相似, 也提供 map 方法
Array.from ([1,1,2], (x) => x * x); // [1,1,4]
Array.from ([1,1,2]).map( (x) => x * x); // [1,1,4]

// 循环字符串,map 对象
let m = new Map([[1,2],[3,4],[4,9]]); 
let m_output =  Array.from(m);	// [ [ 1, 2 ], [ 3, 4 ], [ 4, 9 ] ]


// 处理数组, 将数组中布尔值为 false 的成员转为0
Array.from ([1, , 2, , 3], (x) => x * x); // [ 1, 0, 2, 0, 3 ]

// 指定第二个参数运行次数
Array.from ({length:2}, (x) => x * x); // [1,1,4]

// 判断类型
function typesOf() {
	return Array.from(arguments, value => typeof value)
}
typesOf(null, [], NaN)	//	[ 'object', 'object', 'number' ]



    	





