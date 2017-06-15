// Object.getPrototypeOf(obj), 该方法与 ObjectPrototypeOf 配套, 用于读取一个对象的原型对象, 获取对象原型?
// 如果参数不是对象, 会自动转为对象, undefined 和 null 会报错

// demo
function Rectangle() {
	// ...
}

let rec = new Rectangle();

Object.is(Object.getPrototypeOf(rec), Rectangle.prototype); // true

Object.setPrototypeOf(rec, Object.prototype);

Object.is(Object.getPrototypeOf(rec) === Rectangle.prototype); // false






