// 自定义插件
(function($){
	// 标准格式，形成一个封闭的环境,里面的变量对外不可见
	var flag = 1;

	$.myajax = function(){
		console.log('你好kitty');
	}

	$.fn.tab = function(){
		console.log('你好凯蒂');
	}

	var fn1 = function(){console.log('模拟调用1111');}
	var fn1 = function(){}
	var fn1 = function(){}
	// 这样就只暴露ini一个接口，这里的方法只让内部使用
	// init 貌似不能用？
	$.fn.ini = function(){
		// 调用一系列功能
		console.log('模拟调用000');
		fn1();
		fn1();
		fn1();
	}
})(jQuery);
// 传入 jQuery 对象
