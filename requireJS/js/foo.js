// 依赖 myMath 模块
define(['myMath'], function(myMath) {
	function foo() {
		let num = myMath.add(1, 1);
		return num += '';
	};
	return {
		foo: foo
	};
});