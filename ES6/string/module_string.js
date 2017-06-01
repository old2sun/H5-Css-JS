// 模板字符串
// es6 中用``字符串就可以解决包含空格和换行的字符串
// 连接变量可以不再用 + , 而是 ${var} 包裹变量解决 
// 还可以调用函数, 大部分可以运算


// 保留空格和换行	
let words = `i have a dream,
about peace, i have a dream
about dream......
           	 end..`;

// 连接变量
let version = 'es6 !';
let str1 = `Hello ${version}`; // Hello es6 !

// 调用函数
let fn = (fn) => 'Hello ES6';
let str2 = `foo ${fn()} bar`; // foo Hello ES6 bar


// -----------------------------------------------------

let fn_body = 'return ' + '` Hello ${name}`'
let func = new Function('name', fn_body); // 函数对象, 最后一个参数是执行函数体, 之前的都是参数
func('BB'); // Hello BB	


