// 简易表示法

// ES5
let foo = 'bar';
let baz = {foo};
baz; //	{ foo: 'bar'}

// ES6
let baz2 = {foo:foo};


// ES6
function f(x, y) {
	return {x, y};
}
// ES5
function f2(x, y) {
	return {x:x, y:y};
}
f(1,2)	// { x: 1, y: 2 }


// 方法也可以简写

// ES5
let o = {
	method: function () {
		return "Hello!";
	}
}
// ES6
let o2 = {
	method () {
		return "hello !";
	}
}



