// rest 参数 , 获取函数中的多余参数.  它是一个数组形式, 把多余的变量放进数组
// 结构： ...variable
// PS：rest只能作为最后一个参数, 否则会报错

function add(...values) {
	let sum = 0;

	for(let val of values) {
		sum += val;
	}

	return sum;
}
add(2, 7, 3);	// 12


// ES5
function sortNumbers() {
	return Array.prototype.slice.call(arguments).sort();
}
sortNumbers('a', 'b'); // ['a','b']

// ES6
const sortNumbers_es6 = (...numbers) => numbers.sort();
sortNumbers_es6('c', 'd');	// [ 'c', 'd' ]


// 利用 rest 编写数组 push 方法
function push(array, ...items) {
	items.forEach(function(item) {
		array.push(item);
		console.log(item);
	});
}

let a = [];
push(a, 1,2,3); // [1,2,3]









