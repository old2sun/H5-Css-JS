var select = function(selector) {
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
                // 兼容IE处理,先获取所有标签
                var allEles = document.getElementsByTagName('*');
                for(var i=0;i<allEles.length;i++){
                    // split 分隔符
                    // 把类名分隔进放进数组
                    var arr = allEles[i].className.split(/\s+/);
                    for(var j=0;j<arr.length;j++){
                        if(arr[j]===selector.slice(1)){
                            result.push(allEles[i]);
                            break;
                        }
                    }
                }
            }
            return result
            default:
                result.push.apply(result, document.getElementsByTagName(selector));
                break;
        }
        return result;
    }

    var each = function(arr,fn){
        for(var i=0;i<arr.length;i++){
            var flag = fn.call(arr[i],i,arr[i]);
            if(flag === false){
                break;
            }
        }
    }

