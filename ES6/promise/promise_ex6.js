// promise.then(null,handle) 等价于 promise.catch(handle)
// 实际上 promise.catch 无卵用，母鸡点解

function task(i) {console.log(`task_${i} 执行完毕`)}

function mission(i) {console.log(`mission_${i} complete`)}

let action = (s) => {
	return new Promise( (resolve, reject) => {
		setTimeout(resolve,s);
	});
}

try{
	task(0);
} catch(e) {
	mission(0);	
}

action(1000)
	.then( () => {
		task(1);
		return action(1000);
	})
	.catch( () => {
		mission(1);
	})
	.then( () => {
		task(2);
	})
	.catch( () => {
		mission(2);
	});
