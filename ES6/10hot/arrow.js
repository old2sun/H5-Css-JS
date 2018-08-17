// 普通函数 ES5
let demo1 = function(i) {return i + 1;}

// 箭头函数 ES6 , (i) => i + 1 即 function(i) {return i + 1;}
// demo3 和 demo2 一样, 只是更加的简写
let demo2 = (i) => i + 1;
let demo3 = i => i + 2;

// ES5
function demo4(x,y){
	x++;
	y--;
	return x + y;
}

// ES6
let demo5 = (x,y) => {x++; y--; return x + y;}

/* 
*	ES6 除了写法简便, 还改变了 this 的指向, 它由原来指向调用者, 转变为指向定义函数的对象
*	那是由于 箭头函数 没有自己的 this, 它的 this 是继承外部的代码块 
*/
// ES5 
class Animal {
	constructor() {
		this.type = "animal";
	}
	says(say) {
		setTimeout(function() {
			console.log(this.type + ' says ' + say); // 这个方法是 window 调用的，所以这里的 this 指的的是全局,undefined
		},1000)
	}
}

let animal = new Animal();
animal.says('hi');

// 传统 ES5 改变指针
class Animal_ex1 {
	constructor() {
		this.type = "animal";
	}
	says(say) {
		let self = this;
		setTimeout(function() {
			console.log(self.type + ' says ' + say);
		},1000)
	}
}
let animal_ex1 = new Animal_ex1();
animal_ex1.says('hi');

// 还是 ES5
class Animal_ex2 {
	constructor() {
		this.type = "animal";
	}
	says(say) {
		setTimeout(function() {
			console.log(this.type + ' says ' + say);
		}.bind(this),1000)
	}
}
let animal_ex2 = new Animal_ex2();
animal_ex2.says('hi');


// ES6 改变指针
class Animal_ex3 {
	constructor() {
		this.type = "animal";
	}
	says(say) {
		setTimeout( () => {
			console.log(this.type + ' says ' + say);
		},1000)
	}
}
let animal_ex3 = new Animal_ex3();
animal_ex3.says('hi');