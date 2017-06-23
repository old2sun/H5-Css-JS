 function Cycle(id) {
     this.div = document.getElementById(id);
     this.ul = this.div.getElementsByTagName('ul')[0];
     this.as = this.div.getElementsByTagName('a');
     this.lis = this.div.getElementsByTagName('li');
     this.imgWidth = 1366;
     this.as[0].className = 'active';
     this.ul.style.width = this.imgWidth * this.lis.length + 'px';
 }
 Cycle.prototype = {
     constructor : Cycle,
     init : function(){
         var that = this;
         for(var i=0;i<this.as.length;i++){
             this.as[i].index = i;
             this.as[i].onclick = function(){
                 // 改变样式，调用独立的方法
                 that.change(this);
             }
         }
     },
     change : function(obj) {
         for(var j=0;j<this.as.length;j++){
             this.as[j].className = '';
         }
         obj.className = 'active';
         this.ul.style.left = -obj.index * this.imgWidth + 'px';
     }
 }