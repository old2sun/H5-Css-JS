fetch('http://192.168.1.227:8080/new_api/fetch GO!/movies.json')
	.then(res=>{
		return res.text()
	})
	.then(res=>{
		console.log(res)
	})