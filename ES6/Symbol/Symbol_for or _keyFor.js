// Symbol.for(). 接受一个字符串作为参数, 把参数登记, 然后搜索以这个参数作为名称的 symbol值.
// 与 Symbol() 类似, 生成新的 Symbol, 只是 Symbol.for() 会查找给定的 key是否存在, 再去新建新的 Symbol值
// 它是全局环境的一个值


// 使用同一个值
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

Object.is(s1,s2); // true


// 返回一个已等级的 Symbol 类型值的 key
var sym1 =  Symbol.for('fn1');
Symbol.keyFor(sym1);	// fn1

var sym2 = Symbol('fn2');	// 这里的 sym2 是未登记的 Symbol 值
Symbol.keyFor(sym1);	// undefined



