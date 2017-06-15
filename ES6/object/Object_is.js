// Object.is() 比较两个值是否全等, 但是和全等会有点不一样
Object.is('foo', 'foo');	// true
Object.is({}, {});	// false

// 如果用ES5 判断结果会相反, 可以说 === 不够严谨
Object.is(+0, -0); // false
Object.is(NaN, NaN); // true




