// ES6 共有5种方法可以遍历对象的属性

/*
	for in 遍历自身和继承的可枚举属性
	Object.keys(obj) 返回一个数组, 包括自身所有可枚举属性
	Object.getOwnPropertyNames(obj) 返回一个数组, 包括对象自身所有属性, 不可继承和Symbol除外
	Object.getOwnPropertySymbols(obj) 返回一个数组, 包括自身所有 Symbol属性
	Reflect.ownKeys 返回一个数组, 包含自身所有属性


	以上方法都遵守以下次序规则：

	首先遍历所有属性名为数值的属性, 按照数字排序;
	其次遍历所有属性名为字符串的属性, 按照生成时间排序;
	最后遍历所有属性名为 Symbol 值的属性, 按照生成时间排序.
*/ 

Reflect.ownKeys({[Symbol()]:0, b:0, 10:0, 2:0, a:0 });
// [ '2', '10', 'b', 'a', Symbol() ]
















