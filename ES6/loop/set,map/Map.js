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

    PS: Map 与 Set 的遍历顺序一样, 都是按照插入顺序
*/

const m13 = new Map([
    ['F','no'],
    ['T','ues'],
]);

// keys()
for( let key of m13.keys()) {

    // console.log(key);
    // F
    // T
}

// valuse()
for( let item of m13.values()) {

    // console.log(item);
    // no
    // ues

}

// entries()
for( let [key,value] of m13.entries()) {

    // console.log(key, value);
    // F no
    // T ues
}

// entries 等同于直接 for...of 遍历
for( let [key, value] of m13 ) {

    // console.log(key, value);
    // F no
    // T ues
}

// 原因与 Set一样
map[Symbol.iterator] === map.entries  // true


// Map 结构转数组结构 , 用 拓展云所附即可
const m14 = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);

[...m14.keys()]; // [ 1, 2, 3 ]
[...m14.values()]; // [ 'one', 'two', 'three' ]
[...m14.entries()]; // [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
[...m14]; // [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]


//  结合数组 map 和 filter 方法可以实现 Map 的遍历与过滤, 因为 Map 本身没有 map 和 filter  方法
const map0 = new Map()
                .set(1, 'a')
                .set(2, 'b')
                .set(3, 'c');

const map1 = new Map(
    [...map0].map( ([k, v]) => [k * 2, '_' + v] )
    // [ [ 2, '_a' ], [ 4, '_b' ], [ 6, '_c' ] ]
);

const map2 = new Map(
    [...map0].filter( ([k, v]) => k < 3 )
    // [ [ 1, 'a' ], [ 2, 'b' ] ]
);

// Map 有 forEach 方法 , 同样可以遍历.  结果： a 1 Map { 1 => 'a', 2 => 'b', 3 => 'c' }
map0.forEach( (value, key, map) => { console.log(value, key, map) } )

// 它还有第二个参数, 用来绑定 this
const reporter = {
    report: function (key, value) {
        console.log(key, value)
    }
};

map.forEach(function(value, key, map) {
    this.report(key, value);
}, reporter);


// 与其它数据结构相互转换

// Map 转为数组
const myMap = new Map()
            .set(true, 7)
            .set({foo: 3}, ['abc']);
[...myMap]; // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]

// 数组转为 Map
new Map([
    [true, 7, 9],
    [{foo: 3}, ['abc']]
])
// Map { true => 7, { foo: 3 } => [ 'abc' ] }

// Map 转为对象
function strMaptoObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

const Map_obj = new Map()
            .set('yes', true)
            .set('no', false);
strMaptoObj(Map_obj); // { yes: true, no: false }

//  对象转 Map
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap
}

objToStrMap({ yes: true, no: false }); // Map { 'yes' => true, 'no' => false }


// Map 转 JSON

// 键名都是字符串时
function strMaptoJson(strMap) {
    return JSON.stringify(strMaptoObj(strMap));
}

let jsonMap = new Map().set('yes',true).set('no',false);
strMaptoJson(jsonMap); // {"yes":true,"no":false}

// 键名有非字符串时, 可以转为数组 JSON
function maptoJson(map) {
    return JSON.stringify([...map]);
}
maptoJson(jsonMap); // [["yes",true],["no",false]]


// JSON 转为 Map

// 键名都是字符串
function jsonToStrMap(jsonStr) {
    // 对象转 map 那个方法
    return objToStrMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"yes": true, "no": false}'); // Map { 'yes' => true, 'no' => false }

// JSON 数组格式转换Map
function jsonToMap (jsonStr) {
    return new Map(JSON.parse(jsonStr));
}

jsonToMap('[[true, 7], [{"foo": 3}, ["abc"]]]');
// Map { true => 7, { foo: 3 } => [ 'abc' ] }
