// Symbol作为属性名的遍历 
// 通过 Object.getOwnPropertySymbols 方法遍历属性名返回一个数组

var obj = {};
var a = Symbol('a');
var b = Symbol('b');

obj[a] = 'hello';
obj[b] = 'es6';

var objectSymbols = Object.getOwnPropertySymbols(obj);
objectSymbols; // [ Symbol(a), Symbol(b) ]







