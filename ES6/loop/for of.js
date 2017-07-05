/*
	一个数据结构只要部署了 Symbol.iterator 属性, 就被视为具有 iterator 接口, 就可用 for...of 循环遍历它的成员

	原来的 for...in 循环只能遍历键名/索引, for..of 可以遍历键值,
	它通过 entires 和 keys 可以遍历键名, 因此它还可以代替 forEach 循环.
	for...in 还会遍历对象的属性这一 BUG, 慎用 

*/ 

const arr = ['red', 'green', 'blue'];

for(let v of arr) {
	// console.log(v); // red green blue
}

const obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

for(let v of obj) {
	// console.log(v); // red green blue
}

arr.attr = '我就是个BUG!';
for(let v in arr) {
	// console.log(v); //0 1 2 attr
}




/*
	Map 的遍历时返回一个数组, Set 的遍历时返回一个值

	计算生成数据结构, 调用后都是返回遍历器对象
	entires() 遍历 [键名, 键值] 组成的数组。对于数组, 键名就是索引值; 对于 Set , 键名与键值相同。 Map 默认调用 entries方法
	keys() 遍历键名/索引值
	values() 遍历键值

*/ 
var engines = new Set(['Gecko', 'Trident', 'Webkit']);
for (var e of engines) {
	// console.log(e);  //Gecko Trident Webkit
}

var maps = new Map();
maps.set('edition', 6);
maps.set('committee', 'TC39');
maps.set('standard', 'ECMA-262');
for (var [name, value] of maps) {
	// console.log(name + ':' + value);
	// edition:6
	// committee:TC39
	// standard:ECMA-262
}









