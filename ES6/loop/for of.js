// Array.from(array[, mapfn[, this]])
// array参数 为数组对象或可遍历对象. mapFn 为函数. this 为执行mapFn 时的 this 
// 返回值, 一个新的数组实例

const bar = ['old','2','sun'];
const str = 'caijunye';

let arr1 = Array.from(bar);	// [ 'old', '2', 'sun' ]
let arr2 = Array.from(str);	// [ 'c', 'a', 'i', 'j', 'u', 'n', 'y', 'e' ]

// 循环字符串,map 对象
let m = new Map([[1,2],[3,4],[4,9]]); 
let m_output =  Array.from(m);	// [ [ 1, 2 ], [ 3, 4 ], [ 4, 9 ] ]












