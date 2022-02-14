jQuery(function(){
	$('.section1-element').fadeOut(0);
	
	
	
	//첫번째 요소 페이드 인 아웃효과
	$('.section1-element').eq(0).fadeIn(500, function(){
		$('.section1-element').eq(1).fadeIn(500, function(){
			$('.section1-element').eq(2).fadeIn(500, function(){
				$('.section1-element').eq(3).fadeIn(500, function(){
					$('.section1-element').eq(4).fadeIn(500, function(){
						$('.section1-element').eq(5).fadeIn(500);
					});
				});
			});
		});
	});
	
	
}); //section1.js