// 合并数组
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5
arr1.concat(arr2, arr3); // [ 'a', 'b', 'c', 'd', 'e' ]

// ES6
let b = [...arr1, ...arr2, ...arr3] // [ 'a', 'b', 'c', 'd', 'e' ]
