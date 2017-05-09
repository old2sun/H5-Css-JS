var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log('监听器 listener1 执行');
}
var listener2 = function listener2(){
	console.log('监听器 listener2 执行');
}
// addListener() 为指定事件添加一个监听器到数组尾部
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);
// listenerCount()类方法，返回指定事件的监听器数量
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '个监听连接事件');
// 第一次触发事件
eventEmitter.emit('connection');
// 移除绑定监听的 listener1 方法
eventEmitter.removeListener('connection',listener1);
console.log("listener1已被移除监听");
// 再次触发事件
eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '个监听连接事件');
console.log("程序执行完毕");