function Cycle(id) {
    if(!id){
        return;
        // 如果没有id，就终止下面的代码
    }
    this.container = document.getElementById(id);
    this.ul = this.container.getElementsByTagName('ul')[0];
    this.aLi = this.ul.getElementsByTagName('li');
    this.aA = this.container.getElementsByTagName('a');
    this.imgWidth = 1366;
}
Cycle.prototype = {
    constructor: Cycle,
    init: function() {
        this.aA[0].className = 'active';
        this.ul.style.width = this.imgWidth * this.aLi.length + 'px';
        var that = this;
        for (var i = 0; i < this.aA.length; i++) {
            this.aA[i].index = i;
            this.aA[i].onclick = function() {
                that.change(this);
            }
        }
    },
    change: function(obj) {
        for (var i = 0; i < this.aA.length; i++) {
            this.aA[i].className = '';
        }
        obj.className = 'active';
        this.ul.style.left = -obj.index * this.imgWidth + 'px';
    }
}
