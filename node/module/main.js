// node.js 有 exports 和 require 两个对象
/*
*	exports 是暴露模块接口，类似jQ的 $ 暴露出来然后调用
*	封装模块格式 module.exports = function(){//...};
*	require 是调用模块，或称为加载模块
*/ 
var hello = require('./hello'); // ./是当前文件夹
hello.world();

