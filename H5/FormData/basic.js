/*
	FormData 对象可以组装键值对模拟表单, 然后通过 XMLHttpRequest 发送请求
	可以通过 append() 方法添加键值对到表单里
	它还有很多方法自行查阅

	实例化构造函数：new FormData (form? : HTMLFormElement)
	form参数可选, 一个表单元素, 包含任何形式的表单控件


	append方法：formData.append(name, value, [filename])
	name 为 value 对应的表单名称; value 为表单值; filename 为传给服务器的文件名
*/

var formData = new FormData();
// 可以用同个名字添加多个值, 但是不会添加重复的值
formData.append('name', '菜叶');
formData.append('name', '菜子');
formData.append('age', '25');
