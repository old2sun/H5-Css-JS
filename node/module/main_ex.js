// 接口的变化是 module.export = Hello 代替 exports.world = function(){}
// 为的就是输出 Hello 本身，而不是 exports
var Hello = require('./hello_ex.js');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();