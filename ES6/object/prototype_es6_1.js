/*
	__proto__ 属性属于内部属性, 不正式对外开放, 最好无视

	取而代之是 ES6 的三个方法	Object.setPrototypeOf()（写操作）
	Object.getPrototypeOf()（读操作）	Object.create()（生成操作, ES5）

*/


// 设置对象的原型, 返回参数对象本身的格式  Object.getPrototypeOf(object, prototype)
// 如果第一个参数不是对象, 会自动转为对象, 但是返回的还是第一个参数, 所以没什么用? undefined 和 null 会报错

// 格式
let o = Object.setPrototypeOf({}, null);


// demo
let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

obj.x // 10
obj.y // 20
obj.z // 40


