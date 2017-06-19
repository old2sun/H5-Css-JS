// util 继承

var util = require('util');
function Base() {
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function() {
		console.log('hello' + this.name);
	};
};
Base.prototype.showName = function() {
	console.log(this.name);
};
function Sub() {
	this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// objSub.sayHello(); // 没有继承sayHello, 报错
console.log(objSub);


// sub 继承的是 Base 的原型




