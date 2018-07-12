// 定义：可以在不刷新页面的前提下动态改变浏览器地址栏中的URL地址，动态修改页面上所显示资源。


// 返回
window.history.back()
window.history.go(-1)

// 向前跳转
window.history.forward()
window.history.go(1)

// 历史记录中页面总数
history.length


// 方法
// pushState： 添加和替换历史记录条目
/*
	参数
	state: 指定网址相关的状态对象，popstate 事件触发时，该对象会传入回调函数中。
	不需此对象，可填null。
	title: 标题，可填 null 忽略。
	url: 新的网址， 必须与前页面处在同一个域。 浏览器地址将显示这个网址。添加 hash 值 (如 #foo)  则不会刷新整个页面。

*/
history.pushState(state, title, url);  // 添加一条历史记录, 不刷新页面


// replaceState 替换当前的历史记录不刷新页面
// 参数参考 pushState 
history.replacestate(state, title, url);


/*
	事件
	popstate： 历史记录发生改变时触发，如 history.back() 调用时触发。   
	调用 history.pushState()或者 history.replaceState() 不会触发 popstate事件。

	hashchange： 当页面 hash 值改变时触发。
*/ 

// 获取当前状态 
history.state;
