$(function(){
	// 幫 a.abgne_gotoheader 加上 click 事件
	$('#gotop').click(function(){
		// 讓捲軸用動畫的方式移動到 0 的位置
		// 感謝網友 sam 修正 Opera 問題
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 0
		}, 600);
 
		return false;
	});
    
        $('#gotop').stop().fadeOut("fast");
    
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });

});






