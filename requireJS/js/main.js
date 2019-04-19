// 主模块(入口函数)

require.config({
	// baseUrl: 'js',
	path: {
		foo: 'foo'
	}
});

require(['foo'], function(foo) {
	console.log(foo.foo())
});