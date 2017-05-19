// class 声明一个类, 在里面建立一个构造函数
// extends 继承类, 继承它的实例, 但没继承指针
// super 指代父类的实例, 由于子类在继承后没有指针对象, 要通过在构造方法里调用 super() 才不会报错

class House {
	// 构造方法里属性与方法在实例化后可以在类里面共享

	constructor() { // constructor 是构造方法
		this.num = '110';
	}
	houseNum(name) {
		console.log(name + '"house is ' + this.num);
	}
}

let house = new House();
house.houseNum('Martin'); // Martin's house is 110

class BigHouse extends House { // extends 继承它的类, 继承它的方、属性
	
	constructor() { 
		super(); // 指代父类的 this, 继承父类的 this
		this.num = '999';
	}
}

let bighouse = new BigHouse();
bighouse.houseNum('Jane'); // Jane's house is 999

