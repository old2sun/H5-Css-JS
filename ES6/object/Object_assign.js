// Object.assign 方法用于对象的合并, 复制可枚举属性到目标对象
// 第一个参数为目标对象, 后面参数都是被复制对象
// undefined 和 null 不能作为第一个参数, 字符串作为第一个参数会以数组形式拷入, 其他类型会被忽略
// 此方法为浅拷贝


let target = { a:1 };

let source1 = { b:2 };
let source2 = { c:3 };

Object.assign(target, source1, source2);
target; // { a: 1, b: 2, c: 3 }


// 只有一个参数, 直接返回该参数
let obj = {a:1};
Object.assign(obj)
Object.is(obj,obj); // true


// 字符串作参数
let v1 = 'abc';
let v2 = true;
let v3 = 10;

let v_obj = Object.assign({}, v1, v2, v3); // { '0': 'a', '1': 'b', '2': 'c' }


// 浅拷贝, 拷贝的是它的引用地址, 修改的值会改变
let obj1 = {a: {b:1}};
let obj2 = Object.assign({}, obj1);

obj1.a.b = 2; // 2


// 用途

// 为对象添加属性
class Point {
	constructor(x, y) {
		Object.assign(this, {x, y});
	}
}

// 为对象添加方法
Object.assign(Function.prototype, {
	someMethod(arg1, arg2) {
		// code...
	},
	anotherMethod() {
		// code...
	}
});

