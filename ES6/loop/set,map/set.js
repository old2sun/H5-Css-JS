// Set() 允许存储任意类型的唯一值, 类似于不能重复值的数组, 重复的值会自动过滤掉
// 返回值是一个新的数组

const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  // console.log(i); // 2,3,5,5 
}

const set = new Set([1,2,1,1,5]);
let set_output = [...set];	//	[1,2,5]

const items = new Set([1,1,1,5,5,5,2]);
let items_output = items.size; // 成员总数3
