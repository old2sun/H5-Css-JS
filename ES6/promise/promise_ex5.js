// 懵逼，没搞懂
new Promise( (resolve, reject) => {
	reject(' :(  ');
})
	.then(null, function() {
		// 处理 rejected 动作
		// return 'some description of :('; // 不应该直接返回值是没作用的
	})
	.then(
			(data) => {console.log(`resolved:${data}`);},
			(error) => {console.log(`resolved:${error}`);}

		)