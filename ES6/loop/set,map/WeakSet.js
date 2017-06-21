/*
 	WeakSet 与 Set 类似, 也是不能重复值的集合, 但是有两个区别

	一、WeakSet 的成员只能是对象
  二、WeakSet 的对象都是弱引用, 即如果其它对象不再引用 WeakSet对象, 那么
  垃圾回收机制会自动回收该对象所占用的内存, WeakSet对象自动消失. 所以 ES6
  规定它不可遍历

  WeakSet 作为构造函数, 可接受任何具有 Iterator 接口的对象, 它们都可以作为参数,自动
  成为 WeakSet 实例对象的成员
*/

const ws = new WeakSet();
// ws.add(1)   // TypeError: Invalid value used in weak set
// ws.add(Symbol())   // TypeError: Invalid value used in weak set


// a 数组的成员成为 WeakSet 的成员, 而不是数组本身. 意思是数组的成员只能是对象
const a = [[1, 2], [3, 4]];
const wws = new WeakSet(a);

// 数组 b 的成员不是对象, 加入 WeakSet就会报错
const b = [5, 6];
// const wwws = new WeakSet(b); //TypeError: Invalid value used in weak set



/*
  它有3个方法：
  

*/
