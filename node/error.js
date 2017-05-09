// 为触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃，
// 示例：
var events = require('events');
var emitter = new events.EventEmitter();
var wrongMeassage = function(){console.log("wrong meassage")}
emitter.on('error',wrongMeassage);
emitter.emit('error');