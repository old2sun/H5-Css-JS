/* 
	Iterator 的作用：
	一、提供统一的、简便访问的接口；二、使得数据结构的成员能够按照某种次序排序；三、是ES6创造新一种的遍历 命令  for...if 循环.

	Iterator  遍历过程：
	1）创建一个指针对象， 气指向当前数据结构的起始位置。遍历器对象本质上 , 就是一指针对象
	2）第一次调用指针的 next 方法, 指针指向数据结构的第一个成员;  第二次调用指针指向数据结构第二个成员
	3) 不断调用指针对象的 next 方法, 直到指向数据结构的结束位置

	每一次调用 next, 都会返回数据数据结构的当前成员的信息, value (当前成员的值)、done（布尔值. 表示遍历而结束） 。

	原生具备 Iterator 接口的数据结构
	Array, Map, Set, String TypedArray, 函数的 arguments 对象

	凡事部署了 Symbol.iterator 属性的数据结构, 就称为部署了遍历器接口。
	调用这个接口, 就会返回一个遍历器对象。
*/

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next();    // { value: 'a', done: false }
iter.next();	// { value: 'b', done: false }
iter.next();	// { value: 'c', done: false }
iter.next();	// { value: undefined, done: true }

























