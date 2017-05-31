// startsWith 从字符串头部检索字符串是否存在
// endsWith 从字符串尾部检索
// includes 检索字符串是否包含, 它们返回都是布尔值

let s = 'Hello ES6 .';
let ouput1 = s.startsWith('Hello');	// true
let ouput2 = s.endsWith('.');	// true
let ouput3 = s.includes('6');	// true


// startsWith 和 includes的第二个参数是从指定位置开始检索至结尾
// endsWith的第二个参数是从尾部开始检索至指定位置
let s2 = 'Hello ES7 .';
let ouput4 = s2.startsWith('Hello',6);	// false
let ouput5 = s2.endsWith('Hello',5);	// true
let ouput6 = s2.includes('7',5);	// true

