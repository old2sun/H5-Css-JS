// at 与 charAt() 方法一样，返回指定位置的字符, 但是 at 可以识别大于 0xFFFF的字符
// 此方法只是提案

let output1 = 'abc'.charAt(0);	//a
let output2 = '𠮷'.charAt(0);	//�

let output3 = 'abc'.at(0);	
let output4 = '𠮷'.at(0);
