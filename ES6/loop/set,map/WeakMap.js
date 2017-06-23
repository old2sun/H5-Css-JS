// WeakMap 与 Map 类似, 也是用于生成键值对集合

// 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 2};
wm1.set(key, 2);
wm1.get(key); // 2

// WeakMap 也可以接受一个数组, 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2); // bar



//  WeakMap 和 Map 的区别有两点

// 一、 WeakMap 只接受对象作为键名 (null 除外), 不接受其他类型的值作为参数

const map = new WeakMap();
// map.set(1,2); // TypeError: Invalid value used as weak map key
// map.set(Symbol(),2); // TypeError: Invalid value used as weak map key
// map.set(null,2) // TypeError: Invalid value used as weak map key


// 二、 WeakMap 的键名所指向的对象, 不计入垃圾回收机制
