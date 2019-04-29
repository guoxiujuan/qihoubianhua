
$(document).ready(function($) {

	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( _winw<=767 ){
				$('#nv').stop().slideDown();
			}
		}else{
			$('body').removeClass('open');
			if( _winw<=767 ){
				$('#nv').stop().slideUp();
			}
		}
	});
	
	// 导航
	function myNav(){
	    var _winw = $(window).width();
	    if( _winw>767 ){
	        $('.g-nav li').bind('mouseenter',function() {
	            $(this).find('dl').stop().slideDown();
	            if( $(this).find('dl').length ){
	                $(this).addClass('ok');
	            }
	        });
	        $('.g-nav li').bind('mouseleave',function() {
	            $(this).removeClass('ok');
	            $(this).find('dl').stop().slideUp();
	        });
	        $('body').removeClass('open');
	    }else{
	        $('.g-nav li').unbind('mouseenter mouseleave');
	        $('.g-nav .v1').click(function(){
	            if( $(this).siblings('dl').length ){
	                $(this).siblings('dl').stop().slideToggle();
	                return false;
	            }
	        });
	    }
	}
	myNav();
	$(window).resize(function(event) {
	    myNav();
	});
	
});