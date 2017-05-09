/* 
*	这段代码的原理是 event 对象注册了事件 some_event 的一个监听器，
*  然后在1秒后，向 event 对象发送事件 some_event，此时会调用 some_event 的监听器
*/
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function(){
	console.log('2s后 some_event 事件触发');
});
setTimeout(function(){
	event.emit('some_event');
},2000);