/*---模拟jQuery封装----*/
(function(window,undefined){
	/* 传入window减少查找 window对象的世界；压缩的时候参数可以压缩
	 传undefined作用：早期浏览器中是可以重新赋值的，
	参数中添加undefined保证了undefined的值被固定，不会被重新复制 */
	var Jerry = function(selector){
			return new Jerry.fn.init(selector);
		}
		Jerry.fn = Jerry.prototype = {
			init : function(selector){
				// 判断形参是否字符串
				if(typeof selector === 'string'){
					// 判断是否标签
					if(selector.charAt(0)==='<'){
							// 获得标签片段集合
							// 这里的 this 指向了 init 实例，那么实例可以调用$.parseHTML方法
							[].push.apply(this,Jerry.parseHTML(selector));
						}else{
							// 获得元素集合
							// 这里的 this 指向 init实例
							[].push.apply(this,Jerry.select(selector));
						}
					}
				// 返回构造函数的实例,方便链式调用
				return this;
			},
			Jerry : '1.4',
			length : 0,
			size : function(){
				// 当 init的原型继承 Jerry的原型时, this指向 init的实例函数
				return this.length;
			}
		};

		//给 Jerry 拓展成员
		Jerry.extend = Jerry.fn.extend = function(obj){
			for(var key in obj){
				this[key] = obj[key];
			}
		};

	// 假设传入对象给 Jerry 或 Jerry.prototype 添加方法
	//Jerry.extend = Jerry.fn.extend = function(o1,o2){
	//	var p = arguments;
	//	if(p.length === 1){
	//		for(var key in p[0]){
	//			/* 
	//			Jerry对象调用时，this指向它本身
	//			Jerry.fn调用时，this指向它的实例(即init的实例)
	//			*/
	//			this[key] = p[0][key];
	//		}
	//	}
	//	else if(p.length === 2){
	//			for(var key in o2){
	//			o1[key] = o2[key];
	//		}
	//	}
	//}

	// 实现添加元素功能
	Jerry.fn.extend({
		appendTo : function(param){
			var that = this; // this指向 $(),是 init的实例，实例化两个 div对象 的集合(实例放进去的数据)
			var targets = Jerry(param);  // Jerry的实例，同样是 init 的实例(实例要放进的目标元素)
			// each 循环方法，循环位置，再循环数据
			Jerry.each(targets,function(index){
				var nowTarget = this; // 遍历缓存每个目标元素
				Jerry.each(that,function(){
					// 循环遍历 that 集合
					// this 指向这里的 that ，即实例化的 2个 div标签节点
					var node = (targets.length-1 === index?this:this.cloneNode(true));
					// 在每个 div对象里插入一标签节点个
					nowTarget.appendChild(node);
				});
			});
			// this 返回  $()的实例, 可以实现链式操作
			//这里返回的 this应该要 克隆的个数+一开始实例的个数
			return this;
		}
	});

	// 转换字符串标签到数组
	Jerry.extend({
		parseHTML : function(html){
			var result = [];
			var div = document.createElement('div');
			/*创建元素只是为了方便放进它的标签里，通过遍历 childNodes节点,获得标签节点
			 childNodes 会自动获取 文本节点，标签节点 等节点  */
			div.innerHTML = html;
			for(var i=0;i<div.childNodes.length;i++){
				// 把每一个标签节点放进数组
				result.push(div.childNodes[i]);
			}
			return result;
		}
	});

	// Jerry 对象each方法
	Jerry.extend({
		// each() 外部调用each方法，each方法的内部调用 外部传进来的 方法
		each : function(arr,fn){
            for(var i=0;i<arr.length;i++){
            	// 调用外部传进来的函数, call改变this指向，指向每一个 	
                if(false === fn.call(arr[i],i,arr[i])){
                    break;
                }
            }
        }
	})
	//Jerry实例的each方法
	Jerry.fn.extend({
		each : function(fn){
			// 这里的 this 指向实例，如元素
			Jerry.each(this,fn);
		}
	});
	// 获取元素公共模块
	Jerry.extend({
			select : function(selector) {
		    var result = [];
		    var firstChar = selector.charAt(0);
		    switch (firstChar) {
		        case '#':
		            result.push.call(result, document.getElementById(selector.slice(1)));
		            break;
		        case '.':
		            if(document.getElementsByClassName){
		                result.push.apply(result,document.getElementsByClassName(selector.slice(1)));
		            }else{
		                var allEles = document.getElementsByTagName('*');
		                for(var i=0;i<allEles.length;i++){
		                    var arr = allEles[i].className.split(/\s+/);
		                    for(var j=0;j<arr.length;j++){
		                        if(arr[j] == selector.slice(1)){
		                            result.push(allEles[i]);
		                            break;
		                        }
		                    }
		                }
		            }
		            break;
		        default:
		            result.push.apply(result, document.getElementsByTagName(selector));
		            break;
		    }
		    return result;
		}
	});

	// 改变 init 构造函数的 原型指向
	Jerry.fn.init.prototype = Jerry.fn;

	/* 把Jerry 暴露在外面，向外部松开接口
	(实际上给 window添加两个属性 $ 和 Jerry) */
	window.$ = window.Jerry = Jerry;

})(window);