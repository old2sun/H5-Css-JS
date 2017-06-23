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
					else if(Jerry.isJerry(selector)){
						// 判断 形参 是否 Jerry实例
						// 直接返回实例
						return selector;
					}
					else if(Jerry.isDom(selector)){
						// 判断 形参 是否DOM对象
						this[0] = selector;
						this.length = 1;
					}
					else if(Jerry.isArrayLike(selector)){
						// 判断 形参 是类数组
						[].push.apply(this,selector);
					}
					// 这个属性是判断 参数 是否 jQuery对象,让实例都加上这个属性
					this.selector = selector;
					return this;
			},
			Jerry : '1.6',
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
	// 类型判断
	Jerry.extend({
		isString : function(str){
			return typeof  str === 'string';
		},
		isDom : function(dom){
			// 判断DOM节点，nodeType 为1是 DOM节点
			return dom.nodeType === 1;
		},
		isJerry : function(obj){
			return 'selector' in obj;
		},
		isFunction : function(fn){
			// 判断是否方法
			return typeof fn === 'function';
		},
		isArrayLike : function(arr){
			//判断是否类数组
			return arr && arr.length && arr.length>0;
		},
		isArray : function(arr){
			// 判断具体类型
			return Object.toString.call(arr) === '[object Array]';
		},
		isObj : function(obj){
			return typeof obj === 'object';
		}
	});
	// 拓展Jerry 实例
	Jerry.fn.extend({
		html : function(html){
			if(html === undefined){
				// 如果文本为 空(undefined) 返回第一个元素的文本
				return this[0].innerHTML;
			}else {
				// each的this指的是源实例对象
				// 这里的return 是return this 实例对象
				return Jerry.each(this,function(){
					// 这里的this指的实例集合是每一个元素 
					this.innerHTML = html;
				});
			}
			// return this //在这写返回值也一样效果 

		},
		attr : function(key,value){
			// 判断获取属性值的分支
			if(typeof key === 'string' && value ===undefined){
				return this[0].getAttribute(key);//获取第一个元素的属性值
			}else if(typeof key === 'string' && typeof value === 'string'){
				// 这里的this为实例对象
				// return Jerry.each(this,function(){
				// 	// 设置每一个元素属性值
				// 	this.setAttribute(key,value)
				// });
				// 另一种写法 
				// 这个 this与上面的this 是同一个，是init的实例
				return this.each(function(){
					this.setAttribute(key,value);
				});
			}
		},
		val : function(val){
			if(arguments.length === 0){
				// 如果没有实参，返回第一个元素的文本
				return this[0].value;
			}else {
				// return Jerry.each(this,function(){
				// 	this.value = val;
				// 	console.dir(this);
				// });
				return this.each(function(){
					this.value = val;
				});
			}
		}	
	});



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

	// 实现添加元素功能3种方式
	Jerry.fn.extend({
		// 	appendTo : function(param){
		// 		//  this 为 Jerry 实例，新标签集合
		// 		var origins = this;
		// 		var targets = Jerry(param);
		// 		var nodes = [];
		// 		var n = 0;
		// 		for(var key in targets){
		// 			// for in  会把 length 也遍历， 用if判断去除它
		// 			if(key === 'length'){
		// 				// hasOwnProperty 判断属性是否在对象自身，取反，判断是否在原型
		// 				// 过滤长度属性 和 函数属性 或其他属性
		// 				if(key==='length' || !targets.hasOwnProperty(key)){
		// 					continue;
		// 				}
		// 			}
		// 			n++; // 记录器，用来判断目标元素的长度是否最后一个
		// 			var target = targets[key];
		// 			for(var k in origins){
		// 				if(k==='length' || !origins.hasOwnProperty(k)){
		// 					continue;
		// 				}
		// 				var node = null;
		// 				if(targets.length - 1===n){
		// 					node = origins[k];
		// 				}else{
		// 					node = origins[k].cloneNode(true);
		// 					nodes.push(node);
		// 				}
		// 				console.log(target)
		// 				target.appendChild(node);
		// 			}
		// 		}
		// 		[].push.apply(this,nodes); // 实例化克隆的元素
		// 		return this // 返回实例化的 2个 新元素 和 4个克隆元素
		// 	}

		//appendTo : function(param){
		//	// this为jerry实例，源数据
		//	var origins = this;
		//	var targets = Jerry(param) // 同样是Jerry实例,但是实例的内容不一样,目标元素。
		//	var nodes = [];
		//	for(var i=0;i<targets.length;i++){
		//		// 遍历目标元素,缓存其中一个元素
		//		var tar = targets[i];
		//		for(var j=0;j<origins.length;j++){
		//			//遍历 源数据,把每一个元素 放到 其中一个目标元素中
		//			var node = null; //用于缓存克隆的元素
		//			if(targets.length - 1 === i){
		//				// 只剩最后一个目标元素时，不再复制
		//				node = origins[j];
		//			}else {
		//				node = origins[j].cloneNode(true);
		//				nodes.push(node); // 把克隆的元素存在数组
		//			}
		//			// 往目标元素插入 源数据
		//			tar.appendChild(node);
		//		}
		//	}
		//	[].push.apply(this,nodes); // 实例化克隆的元素
		//	return this // 返回实例克隆的实例,方便链式编程
		//}

		appendTo : function(param){
			var that = this; // this指向 $(),是 init的实例，实例化两个 div对象 的集合(实例放进去的数据)
			var targets = Jerry(param);  // Jerry的实例，同样是 init 的实例(实例要放进的目标元素)
			var cNodes = [];
			// each 循环方法，循环位置，再循环数据
			Jerry.each(targets,function(index){
				var nowTarget = this; // 遍历缓存每个目标元素
				Jerry.each(that,function(){
					// 循环遍历 that 集合
					// this 指向这里的 that ，即实例化的 2个 div标签节点
					var node = null;
					if(targets.length-1 === index){
						node = this;
					}else {
						node = this.cloneNode(true);
						cNodes.push(node);
					}
					// 判断不是同一个元素，要放入的元素与被放入的元素都是自己，会产生冲突
					if(nowTarget != node){
						// 在每个 div对象里插入一标签节点个
						nowTarget.appendChild(node);
					}
				});
			});
			[].push.apply(this,cNodes);
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
		},
		prependTo : function(param){
			// this为jerry实例，源数据
			var origins = this;
			var targets = Jerry(param) // 同样是Jerry实例,但是实例的内容不一样,目标元素。
			var nodes = [];
			for(var i=0;i<targets.length;i++){
				// 遍历目标元素,缓存其中一个元素
				var tar = targets[i];
				for(var j=0;j<origins.length;j++){
					//遍历 源数据,把每一个元素 放到 其中一个目标元素中
					var node = null; //用于缓存克隆的元素
					if(targets.length - 1 === i){
						// 只剩最后一个目标元素时，不再复制
						node = origins[j];
					}else {
						node = origins[j].cloneNode(true);
						nodes.push(node); // 把克隆的元素存在数组
					}
					// 往目标元素插入 源数据
					// insertBefore(要插入元素，位置)
					tar.insertBefore(node,tar.firstChild);
				}
			}
			[].push.apply(this,nodes); // 实例化克隆的元素
			return this // 返回实例克隆的实例,方便链式编程
		},
		append : function(html){
			// 解析： $(<span>测试123</span><span>test0000</span>).appendTo('div');
			// 这里的 this 指的是 实例对象,目标元素
			// 这里的this由于是类数组，导致实例化时走不进分支，需要修改
			Jerry(html).appendTo(this);
			// 返回的是 实例对象目标元素
			return this;
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
            return arr  // 返回实例，即集合对象，类数组
        }
	});
	//Jerry实例的each方法
	Jerry.fn.extend({
		each : function(fn){
			// 这里的 this 指向实例，如元素
			return Jerry.each(this,fn);
			// 返回实例 , 即集合对象 类数组
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