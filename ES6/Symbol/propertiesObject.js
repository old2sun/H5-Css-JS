// 作为属性名的 symbol, 可以作为标识符, 防止某一个键被覆盖

// Symbol值作为对象属性名时, 不能用点运算符 a.mySymbol 这种, 不然属性名是字符串, 而不是 Symbol值

// 它是公有的属性

var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种
var a = {
	[mySymbol]: 'Hello!'
};

// 第三种
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 三种结果都一样
a[mySymbol] 


// some demo
const COLOR_RED = Symbol('red');
const COLOR_GREEN = Symbol('green');

function getComplement(color) {
	switch (color) {
		case COLOR_RED:
			return COLOR_GREEN;
		case COLOR_GREEN: 
			return COLOR_RED;
		default:
			throw new Error('undefined color');
	}
}


// 消除魔术字符串实例
function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case 'Triangle': // 魔术字符串
      area = .5 * options.width * options.height;
      break;
    /* ... more code ... */
  }

  return area;
}

getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串


// 把重复多次出现的字符串修改, 常用是写成变量
// var shapeType = {
// 	triangle: 'Triangle'
// };

const shapeType = {
  triangle: Symbol() // 不明所以
};

function getArea(shape, options) {
	var area = 0;

	switch (shape) {
	  case shape.triangle: 
	    area = .5 * options.width * options.height;
	    break;
	}

	return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });






