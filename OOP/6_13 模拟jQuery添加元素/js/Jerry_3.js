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
				// 判断形参是否字符串，调用获取元素方法
				if(typeof selector === 'string'){
						[].push.apply(this,Jerry.select(selector));
					}
				// 返回构造函数的实例,方便链式调用
				return this;
			},
			Jerry : '1.2',
			length : 0,
			size : function(){
				// 当 init的原型继承 Jerry的原型时, this指向 init的实例函数
				return this.length;
			}
		};
	// 假设传入对象给 Jerry 或 Jerry.prototype 添加方法
	Jerry.extend = Jerry.fn.extend = function(o1,o2){
		var p = arguments;
		if(p.length === 1){
			for(var key in p[0]){
				/* 
				Jerry对象调用时，this指向它本身
				Jerry.fn调用时，this指向它的实例(即init的实例)
				*/
				this[key] = p[0][key];
			}
		}
		else if(p.length === 2){
				for(var key in o2){
				o1[key] = o2[key];
			}
		}
	}
	// Jerry 对象each方法
	Jerry.extend({
		each : function(arr,fn){
            for(var i=0;i<arr.length;i++){
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