// default, 指定方法参数的默认值
// rest, 传递多个不确定数量的参数


// ES5 default
function animal(type) {
	type = type || 'cat';
	console.log(type);
}
animal();

// ES6 default
function animal_ex(type = 'dog') {
	console.log(type);
}
animal_ex();

// ES6 rest
function animals(...types) {
	console.log(types)
}
animals('cat','dog','fish','bird');



