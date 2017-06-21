/*
  js 的对象本质上是键值对的集合, 但是传统上只能用字符串当作键名, 就算不加引号,也会自动
  转为字符串

  ES6 提供的 Map数据结构, 类似于对象也是键值对的集合, 但是它的键的范围不限于
  字符串, 各种类型都可以当作键.

*/

// 简单demo, 展示 set delete has 方法
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content');
m.get(o); // 'content'  获取不存在的值会返回 undefined

m.has(o); // true
m.delete(o); // true  返回布尔值
m.has(o); // false


// 接受数组作为成员
const map = new Map([
  ['name','张三'],
  ['title','author']
]);
map.size // 2
map.has('name'); // true
map.get('name'); // '张三'
map.has('title'); // true
map.get('title'); // 'author'

// 上面代码新建Map实例时 , 指定了两个键 name 和 title.
// 在接受数组作为参数时, 实际上执行的是下面的算法.
const items = [
  ['name','张三'],
  ['title','author']
];

const map_show = new Map();

items.forEach(
  ([key, value]) => map_show.set(key, value)
)


// 不仅是数组, 任何具有 Iterator 接口的数据结构都可以当作 Map 构造函数的参数
//  即 Set 和 Map 都可以生成新的 Map
const set = new Set ([
    ['foo', 1],
    ['bar', 2]
]);

const m1 = new Map(set);
m1.get('foo'); // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3

// 重复赋予一个键多个值, 前面的值会被覆盖
const m4 = new Map();

m4.set(1, 'aaa');
m4.set(1, 'bbb');
m4.get(1) // 444


//  这里的键表面上是同一个, 实际上是两个值, 内存地址不一样, 导致无法读取
const m5 = new Map();

m5.set(['a'], 555);
m5.get(['a']); // undefined

// 同样值的两个实例, 在 Map 中被视为两个键
// 从这个 demo 可以知道 Map 的键实际上是跟内存地址绑定的, 内存地址不一致就视为两个键.
// 总结：如果使用对象作为键名, 就不需要担心同名属性的碰撞
const m6 = new Map();

// 同样键名 ['b']
const k1 = ['b'];
const k2 = ['b'];

m6
 .set(k1, 111)
 .set(k2, 222);

m6.get(k1); // 111
m6.get(k2); // 222

// 如果 Map 的键是一个简单类型的值, 则只要两个值严格相等, Map 将视其为一个键
let m7 = new Map();

m7.set(-0, 123);
m7.get(+0); // 123

m7.set(true, 1);
m7.set('true', 2);
m7.get(true); // 1



/*
    map 的属性和方法：
    size属性,  返回 Map 结构的成员总数
    set(key, value)  设置键和键值, 返回 Map 结构
    get(key)  读取 key 的对应值, 不存在返回 undefined
    has(key) 返回布尔值, 判断某个键是否存在 Map 对象之中
    delete(key)  返回布尔值, 删除某个键
    clear()  清除所有成员, 没有返回值
*/

// size
const m8 = new Map();
m8.set(['foo'], true);
m8.set(['foo'], false);

m8.size; // 2

// set
// set 方法返回的是 set 对象, 可以使用链式写法
let m9 = new Map();
m9.set('author', 'me');

// Map { 'author' => 'me', [ 1 ] => 'a', [ 2 ] => 'b', [ 3 ] => 'c' }
m9.set([1], 'a').set([2], 'b').set([3], 'c');

// get
const m10 = new Map();

const hello = function() { console.log('hi! baby') }
m10.set(hello, 'hello ES6 ~');
m10.get(hello); // hello ES6 ~

// delete
const m11 = new Map();
m11.set(undefined, 'hh');
m11.has(undefined); // true

m11.delete(undefined); // true;
m11.has(undefined); // false

// clear
let m12 = new Map();
m12.set('a', 0);
m12.set('b', 1);

m12.size; // 2
m12.clear();
m12.size; // 0



/*
    Map 结构提供三个遍历器生成函数和一个遍历方法。
    keys() 返回键名的遍历器
    values() 返回键值的遍历器
    entries() 返回所有成员的遍历器
    forEach() 遍历 Map 的所有成员
*/
