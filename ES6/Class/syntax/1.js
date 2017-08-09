/*
	Class
*/ 



// demo1 , 传统生成实例对象的方式

function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function() {
	return `(${this.x}, ${this.y})`;
};

var p = new Point(1, 2);



// demo2, Class 定义类
class Point_class {
	constructor(x, y) {
		this.x = x;
		this.y = y
	}

	toString() {
		return `(${this.x}, ${this.y})`;
	}
}







