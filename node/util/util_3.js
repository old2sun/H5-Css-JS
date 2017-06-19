// util.isArray(object) 如果给定的参数 'object' 是一个数组返回 true, 否则返回 false

var util = require('util');

util.isArray([]); // true

util.isArray(new Array); // true

util.isArray({}); // false


// util.isRegExp(object) 判断是否 object
util.isRegExp(/some regexp/); // true

util.isRegExp(new RegExp('another regexp')); // true

util.isRegExp({}); // false


// util.isDate(object) 判断日期
util.isDate(new Date()); // true

util.isDate(Date()); // false

util.isDate({}); // false


// util.isError(object) 判断是否一个错误对象, 是返回 true, 不是返回 false
util.isError(new Error()); // true

util.isError(new TypeError()); // false

util.isError({}); // false

