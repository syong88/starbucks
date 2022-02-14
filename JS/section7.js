//section7.js
jQuery(function(){
	
	//메달 위에 마우스 올리면 회전 180도
	$('.medal-wrap').on({
		mouseenter:	function(){
			$(this).find('li').addClass('addClassMedal');
		},
		mouseleave:	function(){
			$(this).find('li').removeClass('addClassMedal');
		}
	});
	
	
});//section7.js