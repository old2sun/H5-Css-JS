// 命名空间
var obj = {
	abc : 123,
	fn : function(){
		console.log(this.abc);
	}
};

// 在命名空间里再建一个命名空间
obj.space = {};
obj.space.abc = 789;
obj.space.info = 'hello';
obj.space.showInfo = function(){
    console.log(this.info);
}
obj.space.sub = {};
obj.space.sub.message = 'hellow kitty 喵';
obj.space.sub.showMessage = function(){
	console.log(this.message);
}

/*	
早期的一些javaScript库(YUI、ExtJs) 是通过命名空间来存储数据
Ext.chart.Chart = function(){
	
}
Ext.chart.Chart();
widget组件?
*/
