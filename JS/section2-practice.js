//mainSlide-practice
jQuery(function(){
	var cnt=0;
	var setId;
	var t=0;
	var play=0;
	
	// 프로모션버튼 클릭해서 섹션2 접었다펴기 slideToggle
	$('.promotionBt').on({
		click:	function(){
			
			$('.section2-slide').slideToggle(300);
			$(this).toggleClass('addClassUpbt');
			
			if(play==0){
				play=1; //플레이상태
				autoPlayFn();
			}
			else if(play==1){
				play=0;
				clearInterval( setId );
				cnt=0;
			$('.slide-wrap').stop().animate({left:-820*cnt},0);
			$('.slide').css({opacity:.3});
			$('.slide').eq(1).css({opacity:1});
			
			$('.pageBt').find('img').attr('src', 'img/main_prom_off.png');
			$('.pageBt').eq(cnt).find('img').attr('src', 'img/main_prom_on.png');
			t=0;
			$('.stopPlayBt').find('img').attr('src', 'img/main_prom_stop.png');
			}

		}
	});
	
	$('.viewBoxBt').on({
		mouseenter:	function(){
			if(t==0){
				t=1;
				clearInterval( setId );
			}
		},
		mouseleave:	function(){
			if(t==1){
				t=0;
				autoPlayFn();
			}
		}
	});
	
	
	$('.stopPlayBt').on({
		click:	function(){
			if(t==0){
				t=1;
				clearInterval( setId );
				$(this).find('img').attr('src', 'img/main_prom_play.png');
			}
			else if(t==1){
				t=0;
				autoPlayFn();
				$(this).find('img').attr('src', 'img/main_prom_stop.png');
			}
		}
	});
	
	$('.pageBt').each(function(index){
		$(this).on({
			click:	function(){
				cnt=index;
				mainSlideFn();
			}
		});
	});
	
	$('.nextBt').on({
		click:	function(){
			cnt++;
			mainSlideFn();			
		}
	});
	$('.prevBt').on({
		click:	function(){
			cnt--;
			mainSlideFn();			
		}
	});
	
	//메인슬라이드 애니메이션플레이
	//autoPlayFn();
	function autoPlayFn(){
		setId = setInterval(function(){
			cnt++;
			mainSlideFn()
		},3000);
	}
	
	function mainSlideFn(){
		$('.slide-wrap').stop().animate({left:-820*cnt},400, function(){
			if(cnt<0){
				cnt=2;
				$('.slide-wrap').stop().animate({left:-820*2},0);
			}
			
			if(cnt>=3){
				cnt=0;
				$('.slide-wrap').stop().animate({left:-820*0},0);
			}
			
			$('.slide').css({opacity:.3});
			$('.slide').eq(cnt+1).css({opacity:1});
			
			$('.pageBt').find('img').attr('src', 'img/main_prom_off.png')
			$('.pageBt').eq(cnt).find('img').attr('src', 'img/main_prom_on.png')
			
			
		});
		
	}
	
	
	
	
	
	
	
	
	
	
	
});