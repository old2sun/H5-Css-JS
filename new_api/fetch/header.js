// 自定义请求头信息 

// 创建空的  Headhers 对象
var headers = new Headers();

// 添加请求提头部信息
headers.append('Content-Type', 'text-plain');
headers.append('X-My-Custom-Header', 'CustomValue');

// 判断(has), 获取(get), 以及修改(set) 请求头的值 
headers.has('Content-Type'); // true
headers.get('Content-Type'); // text-plain
headers.set('Content-Type', 'application/json'); // application/json

// 删除某条请求头信息, CustomValue 没有了就为 null
headers.delete('X-My-Custom-Header')


// 创建对象时设置初始化信息------就是上面代码--------
var headers = new Headers({
	'Content-Type': 'text-plain',
	'x-My-Custom-Header': 'CustomValue'
});