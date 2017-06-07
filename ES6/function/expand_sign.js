// 拓展运算符...好比 rest 的逆运算, 把一个数组分割成各个参数
// 简单来讲可以展开数组

console.log(...['Tommy','Miku','Jacky'])

function add(x = 0, y = 0) {
	return x + y;
}

let numbers = [10,13];
add(...numbers)	// 23


// 替代数组的 apply 方法

// ES5
function f1(x, y, z) {
	// ...
}
let args = [0, 1, 2];
f1.apply(null, args);

// ES6
function f2(x,y,z) {
	// ...
}
let arr = [0, 1, 2];
f2(...arr);

// ES5
Math.max.apply(null, [20,1,50]);
// ES6
Math.max(...[20,1,50]);
// 等同于
Math.max(20,1,50);

// ES5
new (Date.bind.apply(Date, [null,2015,1,1])); // 2015-01-31T16:00:00.000Z
// ES6
new Date(...[2015,1,1]);



