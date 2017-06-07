// 嵌套的箭头函数

// ES5
function insert(value) {
	return {
		into: function(array) {
			return {
				after: function(aftervalue) {
					array.splice(array.indexOf(aftervalue) + 1, 0, value);
					return array;
				}
			};
		}
	};
}

// insert(2).into([1,3]).after(1); // [ 1, 2, 3 ]


// ES6
let insert_es6 = (value) => ({into: (array) => ({after: (aftervalue) => {
			array.splice(array.indexOf(aftervalue) + 1, 0, value);
			return array;
		}
	})
})
insert_es6(5).into([4,6]).after(1);	// [ 5, 4, 6 ]


// 管道输出例子
const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);

const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenmult = pipeline(plus1, mult2);

addThenmult(5) // 12

// 再简便点
const plus3 = a => a + 1;
const mult4 = a => a * 2;
mult4(plus3(5)); // 12





