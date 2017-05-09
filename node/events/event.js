// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
/*
* 	绑定事件,第一个参数为事件名,第二个参数是方法名，
*	或直接写方法 eventEmitter.on('eventName',function(){})，相当于是执行一个匿名函数
*/ 
eventEmitter.on('eventName',eventHandler);
// 触发事件
eventEmitter.emit('eventName');