// 引入模块
var events = require('events');
// 创建对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序，即方法
var connectHandler = function connected(){
	console.log('连接成功');
	// 触发 data_received 事件
	eventEmitter.emit('data_received');
}
/* 
* 绑定 connection 和它的事件处理程序，
* 即绑定事件 connection 和名为 connectHandler 的方法
*/
eventEmitter.on('connection',connectHandler);
// 绑定 data_received 事件并创建匿名函数
eventEmitter.on('data_received',function(){
	console.log('数据接收完毕');
});
// 触发 connection 事件
eventEmitter.emit('connection');
console.log('执行完毕');
/*
*	事件顺序：先触发 connection 事件,然后是它的方法connectHandler,
*	它的方法里触发了data_received，然后是跟它绑定在一起的方法匿名函数，
*	最后执行完毕 
*/ 