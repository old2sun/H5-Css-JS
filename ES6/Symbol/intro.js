/*
	ES5 的对象属性名都是字符串, 为了在某些场景保证属性名字独一模二, 
	ES6 引入了第七种数据类型 Symbol, 表示第一无二的值。
	Symbol值通过 symbol函数生成。 那么现在对象的属性名可以有两种类型, 一种是字符串, 一种是 Symbol类型。
	属性名属于 Symbol, 就都是第一无二, 不会与其他属性名产生冲突
*/

let s = Symbol();

typeof s  //  symbol

// Symbol 是原始数据类型的值, 并不是对象, 因此不能添加属性

// 它可以接受一个字符串作为参数, 表示对 Symbol 实例的描述 
var s1 = Symbol('foo');
var s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)


// Symbol 值可以转为字符串或 Boolean, 但不能转数值或运算
var sym = Symbol('My symbol');

String(sym); // 'Symbol(My symbol)'
sym.toString(); // 'Symbol(My symbol)'

Boolean(sym); // true




