// 例子
function Hello() {
	var name;
	this.setName = function(thyName) {
		name = thyName;
	};
	this.sayHello = function() {
		console.log("Hello" + name);
	};
};

// 创建 hello 模块
module.exports = Hello;