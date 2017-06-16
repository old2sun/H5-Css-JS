// Symbol.hasInstance , 指向内部方法, 判断是否该对象的实例
// 其实实际上它是指向 Foo[Symbol.hasInstance](foo)的方法
class MyClass {
	[Symbol.hasInstance](foo) {
		return foo instanceof Array;
	}
}

[1,2,3] instanceof new MyClass(); // true

// Symbol.hasInstance  demo
class Even {
	static[Symbol.hasInstance](obj) {
		return Number(obj) % 2 === 0;
	}
}
1 instanceof Even; // false
2 instanceof Even; // true
123456 instanceof Even; // true



// Symbol.isConcatSpreadable 属性等于一个布尔值, 表示该对象使用 Array.prototype.concat() 时, 是否可以展开
// 这个属性默认展开, 设为 false 必须手动打开
let arr1 = ['c', 'd'];
['a', 'b'].concat(arr1, 'e');  // [ 'a', 'b', 'c', 'd', 'e' ]
arr1[Symbol.isConcatSpreadable];  // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr2, 'e'); // [ 'a', 'b', [ 'c', 'd' ], 'e' ]


// 手动打开数组 demo
let obj = {length: 2, 0: 'c', 1: 'd'}; 
['a', 'b'].concat(obj, 'e');	//[ 'a', 'b', { '0': 'c', '1': 'd', length: 2 }, 'e' ]

obj[Symbol.isConcatSpreadable] = true;
['a', 'b'].concat(obj, 'e');	//[ 'a', 'b', 'c', 'd', 'e' ]



// Symbol.species, 指向当前对象的构造函数, 不懂
class MyArray extends Array {

	static get [Symbol.species]() { return Array; }
}



/* 
	Symbol.match, 指向一个函数, 当执行 str.match(myObject), 如果该属性存在, 会调用它, 返回该方法的返回值
	String.prototype.match(regexp);
	等同于：
	regexp[Symbol.match](this)
*/
class MyMatcher {
	[Symbol.match](string) {
		return 'Hello world'.indexOf(string);
	}
}

'e'.match(new MyMatcher()); // 1 



/* 
	Symbol.replace, 指向一个方法, 当该对象被 String.prototype.replace 方法调用时, 会返回该方法的返回值
	String.prototype.replace(searchValue);
	等同于：
	searchValue[Symbol.match](this, replaceValue)
	懵逼...
*/
const x = {};
x[Symbol.replace] = (...s) => console.log(s);

'Hello'.replace(x, 'world')  // [ 'Hello', 'world' ]











