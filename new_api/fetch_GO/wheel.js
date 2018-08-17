/*简单封装*/

/**
*	将对象转成 a=1&b=2的形式
*	@param obj对象
*/

function obj2String(obj, arr = [], idx = 0) {
	for (let item in obj) {
		arr[idx++] = [item, obj[item]]
	}
	return new URLSearchParams(arr).toString()
}


/**
* 	真正的请求
* 	@param url 请求地址
* 	@param options 请求参数
* 	@param method 请求方式
*/

function commonFetchh(url, options, method = 'GET') {
	const searchStr = obj2String(options)
	let initObj = {}
	if (method === 'GET') { 
		url += '?' + searchStr
		initObj = {
			method: method,
			credentials: 'include'
		}
	} else {
		initObj = {
			method: method,
			credentials: 'include',
			headers: new Headers ({
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			}),
			body: searchStr
		}
	}
	fetch(url, initObj).then( res => {
		return res.json()
	}).then( res => {
		console.log(res)
		return res
	})
}


/**
 * GET请求
 * @param url 请求地址
 * @param options 请求参数
 */
function GET(url, options) {
	return commonFetchh(url, options, 'GET')
}


/**
 * POST请求
 * @param url 请求地址
 * @param options 请求参数
 */
function POST(url, options) {
	return commonFetchh(url, options, 'POST')
}