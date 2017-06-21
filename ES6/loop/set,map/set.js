// Set() 允许存储任意类型的唯一值, 类似于不能重复值的数组, 重复的值会自动过滤掉
// 结构 Set { }

const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  // console.log(i); // 2,3,5,5
}

const set = new Set([1,2,1,1,5]);
let set_output = [...set];	//	[1,2,5]

const items = new Set([1,1,1,5,5,5,2]);
let items_output = items.size; // 成员总数3



// set 实例的属性与方法
// 属性： Set.prototype.constructor 构造函数, 默认Set函数.  Set.prototype.size 返回 set 实例成员的总数
// 方法有两大类, 操作数据和遍历操作


// add() 添加值, 返回Set结构本身; has() 返回布尔值, 检查该值是否 Set 的成员;
// delete() 返回布尔值, 表示删除成员是否成功; clear() 清空所有成员, 无返回值
let ss = new Set([0,2,3])

ss.add(1).add(2).add(2); // 2被添加两次, 但只有一个2

ss.size // 3

ss.has(1) // true
ss.has(2) // true
ss.has(3) // false

ss.delete(2)
ss.has(2) // false

ss.clear()
ss // Set {}



// 可以用 Array.from 方法把 Set结构转为数组
const set_items = new Set([0,1,2,3]);
const array = Array.from(set_items); // [ 0, 1, 2, 3 ]

// 结合 Array.from 和 new Set 数组去重
function dedupe(array) {
	return Array.from(new Set(array))
}

dedupe([1,1,2,2,3]) // [ 1, 2, 3 ]



// 它的遍历方法有4个, keys() 遍历键名的遍历器; values() 遍历键值遍历器; entries() 遍历键值对遍历器; forEach() 使用回调函数遍历每个成员
// 由于 Set结构没有键名, 只有键值, 可以说键名和键值是一个值, 所以 keys 和 values 方法一致
// 注意：Set 的遍历顺序是按插入顺序的。

let set_object = new Set(['red', 'green', 'blue']);

for (let item of set_object.keys()) {

	// console.log(item);

	// red
	// green
	// blue
}

for (let item of set_object.values()) {

	// console.log(item);

	// red
	// green
	// blue
}

for (let item of set_object.entries()) {

	// console.log(item);

	// [ 'red', 'red' ]
	// [ 'green', 'green' ]
	// [ 'blue', 'blue' ]
}


// Set 结构的实例默认可遍历, 它的默认遍历器生成函数就是它的 values 方法
Set.prototype[Symbol.iterator] === Set.prototype.values; // true

// 这意味着, 可以省略 values 方法, 直接用 for...of 循环遍历 Set
for(let x of set_object) {

	// console.log(x)
	// [ 'red', 'red' ]
	// [ 'green', 'green' ]
	// [ 'blue', 'blue' ]
}


// forEach(value, key, arr), Set实例的 forEach 方法, 遍历而每个成员, 没有返回值
let set_objs = new Set([1, 2, 3]);
set_objs.forEach((values, key) => {

	// console.log(values * 2);

	// 2
	// 4
	// 6
} );






// 应用demo

// 拓展运算符内部使用 for...of 循环, 所以也可以用在 Set 结构
let set1 = new Set(['aqua', 'coral', 'aliceblue']);
let arr1 = [...set1]; // [ 'aqua', 'coral', 'aliceblue' ]

// 拓展运算符和 Set 结构相结合, 实现数组去重
let arr2 = [1, 1, 1, 20, 20, 40, 'orangered', 'orangered']
let unique = [...new Set(arr2)]; // [ 1, 20, 40, 'orangered' ]


// map 和 filter 方法用于 Set
let arr_set1 = new Set([4, 5, 6]);
arr_set1 = new Set([...arr_set1].map( (x) => x * 2 ) ); // 返回结构  Set { 8, 10, 12 }

let arr_set2 = new Set([4, 5, 6, 8, 9]);
arr_set2 = new Set([...arr_set2].filter( (x) => (x % 2) == 0 ) ); // Set { 4, 6, 8 }


// 并集、交集、差集
let a = new Set([1,2,3]);
let b = new Set([4,3,2]);

let union = new Set([...a, ...b]); // Set { 1, 2, 3, 4 }
let intersect = new Set([...a].filter( x => b.has(x) )); // Set { 2, 3 }
let difference = new Set([...a].filter( x => !b.has(x) )); // Set { 1 }


// 直接在遍历操作中改变原来的 Set 结构, 两个方法的demo
let set_arr1 = new Set([2, 1, 0]);
set_arr1 = new Set([...set_arr1].map( (val) => val *2 )); // Set { 4, 2, 0 }

let set_arr2 = new Set([0, 1, 2]);
set_arr2 = new Set(Array.from(set_arr2, (val) => val * 2 )); // Set { 0, 2, 4 }
