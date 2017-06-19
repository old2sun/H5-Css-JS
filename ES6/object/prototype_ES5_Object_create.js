// Object.create(proto [, propertiesObject])  第一个参数是对象原型, 第二个是对象属性
//  它是ES5 的一个方法

// 单继承
function Shape() {
  	this.x = 0;
  	this.y = 0;
}

Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};

function Rectangle() {
  	Shape.call(this); 	// 继承构造函数
}

Rectangle.prototype = Object.create(Shape.prototype);

var rect = new Rectangle();

rect instanceof Rectangle	// true
rect instanceof Shape;	// true
rect.move(1,1) // "Shape moved."



// 对象属性demo
var o;

o = {};
// 创建一个原型为空的对象
o = Object.create(null);

o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {

	foo: {writable: true, configurable: true, value: 'hello'},

	bar: {
		configurable: false,
		get: function() {return 10},
		set: function(value) {console.log('setting `o.bar` to', value)}
	}
});


// some demo

function Constructor() {}
obj = new Constructor();
// 上面相当于:
// Object.create() 无法执行 Constructor 的初始化代码
obj = Object.create(Constructor.prototype);


// 创建一个以另一个空对象为原型, 且拥有一个属性 p 的对象
obj2 = Object.create({}, { p: {value: 42} })

// 省略了属性特性默认为false, 即属性 P 不可写、不可枚举、不可配置
obj2.p = 24;
obj2.p  // 42

obj2.q = 12 
for (var prop in obj2) {
	console.log(prop) // 'q'
}

delete obj2.p // false

// 现在就是可写、可枚举、可配置的属性 p
obj2 = Object.create({}, { p: {value: 42, writable: true, enumberable: true, configurable: true} })




