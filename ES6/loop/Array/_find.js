// 数组实例 find(), 通过回调函数找出第一个符合条件的元素; 
// 没有符合返回 undefined; findIndex() 则返回 -1
// find(fn(value, index, arr){...} [, thisArg])
// 返回值是数组成员
// findIndex()符合条件返回值是3, 无法识别 NaN

[-1, 0, 1, 2, 3].find((n) => n < 0);	//	-1

[1, 4, -5, 10].find(function(value, index, arr){
	return value > 5;
});	// 10


let a = [1, 4, -5, 10].findIndex(function(value, index, arr){
	return value > 10;
});	// -1



