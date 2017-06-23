	function Tab(id){
		this.oDiv = document.getElementById(id);
		this.aInput = this.oDiv.getElementsByTagName('input');		
		this.aDiv = this.oDiv.getElementsByTagName('div');	
	}
	Tab.prototype.init = function(){
		this.aInput[0].style.backgroundColor = 'orange';
		this.aDiv[0].style.display = 'block';
		var that = this;
		for(var i=0;i<this.aInput.length;i++){
			this.aInput[i].index = i;
			this.aInput[i].onclick = function(){
				// 把 按钮元素这个参数传进去
				that.change(this);
			}
		}
    	this.autoPlay();

	}
	Tab.prototype.change = function(obj) {
		for(var j=0;j<this.aInput.length;j++){
			this.aInput[j].style.backgroundColor='';
			this.aDiv[j].style.display ='none';
			}
			obj.style.backgroundColor = 'orange';
			this.aDiv[obj.index].style.display = 'block';
	}
	Tab.prototype.autoPlay = function() {
            this.nowIndex = 0; 
            var that = this;
            setInterval(function(){
                //在这里 this 是指 window
                // console.log(this);
                if(that.nowIndex === that.aInput.length-1){
                    that.nowIndex = 0;
                }else {
                    that.nowIndex++;
                }
                // that.change(按钮的索引)
                that.change(that.aInput[that.nowIndex]);
            },1500);
        }
