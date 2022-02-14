//section4.js
jQuery(function(){
	
	$(window).scroll(function(){
		
		//섹션4 애니메이션
		//스크롤시 스크롤 탑값( $(window).scrollTop() )이 300픽셀 이상이면
		//애니메이션 동작
		if( $(window).scrollTop() >= $('#section1').offset().top+400 ){
			$('.section4-left').stop().animate({left:0, opacity:1},1500);
			$('.section4-right').stop().animate({right:0, opacity:1},2000);
		}
		else{ //스크롤탑값이 300미만이면 초기화 원위치
			$('.section4-left').stop().animate({left:-1000, opacity:0},1000);
			$('.section4-right').stop().animate({right:-1000, opacity:0},1000);
		}
		
		//섹션5 애니메이션
		if( $(window).scrollTop() >= $('#section3').offset().top+300 ){
			$('.section5-bg-img').stop().animate({opacity:1},3000);
		}
		else{
			$('.section5-bg-img').stop().animate({opacity:0},3000);
		}
		
		//섹션6 애니메이션
		if( $(window).scrollTop() >= $('#section5').offset().top ){
			$('.sec6-ani1').stop().animate({right:0, opacity:1},2000);
			$('.sec6-ani2').stop().animate({right:0, opacity:1},2500);
			$('sec6viewBt').stop().animate({opacity:1},2500);
		}
		else{
			$('.sec6-ani1').stop().animate({right:1000, opacity:0},2000);
			$('.sec6-ani2').stop().animate({right:1000, opacity:0},2500);
			$('sec6viewBt').stop().animate({opacity:0},2500);
		}
		
		//섹션8 애니메이션
		if( $(window).scrollTop() >= $('#section7').offset().top ){
			$('.section8-title-wrap>h2>img').stop().animate({left:0, opacity:1},2000);
			$('.section8-title-wrap>h3>img').stop().animate({left:0, opacity:1},2500);
			$('.section8-title-wrap>p').stop().animate({left:0, opacity:1},3000);
		}
		else{
			$('.section8-title-wrap>h2>img').stop().animate({left:1000, opacity:0},2000);
			$('.section8-title-wrap>h3>img').stop().animate({left:1000, opacity:0},2500);
			$('.section8-title-wrap>p').stop().animate({left:1000, opacity:0},3000);
		}
		
		
		
	});
	
	
	
	
	
	
	
});