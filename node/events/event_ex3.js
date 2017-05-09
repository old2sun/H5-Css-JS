// on() 可以绑定多个事件，示例中两个事件先后被调用
// emit() 用于触发一个事件，第二个参数是实参，可以传进事件里
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener1',arg1,arg2);
});
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener2',arg1,arg2);
});
emitter.emit('someEvent','i m 参数1','i m 参数2');