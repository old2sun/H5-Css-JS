// Symbol作为属性名的遍历 
// 通过 Object.getOwnPropertySymbols 方法遍历属性名返回一个数组

var obj = {};
var a = Symbol('a');
var b = Symbol('b');

obj[a] = 'hello';
obj[b] = 'es6';

var objectSymbols = Object.getOwnPropertySymbols(obj);
objectSymbols; // [ Symbol(a), Symbol(b) ]


// Reflect.ownKeys 方法可以返回所有类型的键名
let obj2 = {
	[Symbol('my_key')]: 1,
	enum: 2,
	nonEnum: 3
};

Reflect.ownKeys(obj2); //  [ 'enum', 'nonEnum', Symbol(my_key) ]








