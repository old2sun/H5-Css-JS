// Object.key() ES5的方法, 遍历成员对象自身属性键名, 返回值是数组
// Object.values 和 Object.entries 跟它配套, 作为遍历的补充手段, 供 for...of 循环使用 
//  除了 ES5 方法, 那两个应该暂时未实现

var obj = {foo: 'bar', baz: 42};
Object.keys(obj);	//[ 'foo', 'baz' ]

let {keys, values, entries} = Object;
let o = { a: 1, b: 2, c: 3 };

// 遍历键名
for (let key of keys(o)) {
	console.log(key); // 'a','b','c'
}

// 遍历值
// for (let value of values(o)) {
// 	console.log(value)
// }


// 遍历键值对
// for (let [key, value] of entries(o)) {
// 	console.log([key, value])
// }