$("#gotop").click(function(){
    $("html,body").animate({
        scrollTop:0
    },'slow');
    return false;
});
$(window).scroll(function() {
    if ( $(this).scrollTop() > 300){
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});