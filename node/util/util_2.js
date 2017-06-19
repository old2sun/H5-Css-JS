// util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换为字符串的方法, 通常用于调试和输出错误

// objcet 为被转换对象; showHidden 决定是否输出更多隐藏信息; depth 表示最大递归层数, 默认2层; colors 输出信息有颜色


var util = require('util');
function Person() {
	this.name = 'byvoid';
	this.toString = function() {
		return this.name;
	};
};
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));