//  keys(), values(), entries() 分别是 遍历数组索引, 遍历值, 遍历键值对
// PS：valuse() 方法貌似没实现

for (let index of ['a', 'b'].keys()) {
	console.log(index);
}
// for (let elem of ['a', 'b'].values()) {
// 	console.log(elem);
// }
for (let [index,elem] of ['a', 'b'].entries()) {
	console.log(index, elem);
}

// 可以手动调用遍历器对象 next 方法 
let names = ['jack', 'tom', 'share'];
let entries = names.entries();
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
// { value: [ 0, 'jack' ], done: false }
// { value: [ 1, 'tom' ], done: false }
// { value: [ 2, 'share' ], done: false }