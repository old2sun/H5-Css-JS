// 简洁表示的一些 demo

let birth = '2000/02/02';

let person = {

	name: '小苗',

	birth,

	hello() {
		return `我的名字是${this.name},生日${this.birth}`;
		// 我的名字是小苗,生日2000/02/02
	}
}





