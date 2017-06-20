// 合并数组
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5
arr1.concat(arr2, arr3); // [ 'a', 'b', 'c', 'd', 'e' ]

// ES6
let b = [...arr1, ...arr2, ...arr3] // [ 'a', 'b', 'c', 'd', 'e' ]



// Map 和 Set结构, Generator 函数
// 拓展运算符内部调用的是数据结构的 Iterator 接口, 因此只要具有 Iterator 接口的对象, 都可以使用拓展运算符, 比如 Map结构
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);
let arr = [...map.keys()]; // [ 1, 2, 3 ]

/*
    Generator 函数（ funtcion* ）运行后, 返回一个遍历器对象, 因此也可以使用拓展运算符

    demo 的 go 是一个 Generator函数, 执行后返回的是 iterator（遍历器）对象,对这个
    遍历器对象执行拓展运算符, 就会将内部的值遍历出来, 再用中括号括起来, 转为数组

   PS： 如果对没有 Iterator 接口的对象使用拓展运算符会报错
*/
var go = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...go()] // [1, 2, 3]
