$(document).ready(function(){
	const $arrow = $('.js-down');
	$arrow.click(function() {
		/* 
		*	完美兼容获取滚动条顶部距离火狐+谷歌,只能取值兼容
		*   $(document).scrollTop(); 
		*/
		// 曲线救国, html兼容火狐, body谷歌
		let distanceH = $('body').height();
		console.log(distanceH)
		$('html,body').animate({scrollTop:distanceH},'normal');
	});
});