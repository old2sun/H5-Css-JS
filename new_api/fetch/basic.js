//  XMLHttpRequest 基本用法如下：

if (window.XMLHttpRequest) {

	request = new XMLHttpRequest ();

} else if (winow.ActiveXObject) { // IE

	try {

		request = new ActiveXObject('Msxml2.XMLHTTP');

	} catch(e) { }

}

// 打开连接，发送数据
request.open('GET', 'https://davidwalsh.name/ajax-endpoint', true);
request.send(null);



// fetch 的基本使用, url 必须, option 可选

fetch('some/url', {

	method: 'get'

}).then(function (response) {

}).catch(function(err) {
	// wrong msg...
});

// 链式写法
fetch('some/url').then(function (response) {
	return // ...执行成功 , 第一步...
}).then(function (returnedValue) {
	// ...执行成功, 第二步...
}).catch(function (err) {
	// wrong msg...
});



