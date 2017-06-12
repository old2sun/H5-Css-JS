//	 对象属性名表达式
// ES5中只能用标识符定义字面量对象, ES6可以用表达式了
//  属性名表达式与简易表示法不能同用

let obj = {};

obj.foo = 1;	// 标识符
obj['a'+'b'] = 2;	// 表达式


// ES5 
let obj_es5 = {
	foo : 1,
	ab : 2
}

//  ES6
let foo = 'foo'; //  存进变量 

let obj_es6 = {
	[foo] : 1,
	['a'+'b'] : 2
}


// 表达式可以定义方法名 
let obj_fo = {
	['h' + 'ello']() {
		return 'hi'; 
	}
} 
obj_fo.hello() // hi










