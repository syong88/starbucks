jQuery(function(){
	
	//메인메뉴(선택자:mainBt)에 마우스 오버시(mouseenter) 
	//현재 선택된 메인메뉴 바로(이것) 아래(next) 서브메뉴(선택자:sub)가 위에서 아래로 부드럽게 슬라이드다운(slideDown)
	//그리고 이전에 내려온 서브메뉴들은 모두 슬라이드 업시킨다. slideUp
	//해당 메인버튼의 마우스 오버 효과(하일라이트 효과)를 지속 시키기 위해
	//클래스를 추가한다.(addClass())
	//해당버튼을 제외한 모든 버튼은 추가된 클래스를 삭제한다.
	
	
	$('.mainBt').on({
			mouseenter:	function(){
				
				$('.sub').stop().slideUp(200); //서브6개 업 (순서바뀌면 안됨)
				$(this).next().stop().slideDown(300); //마우스오버된 해당 서브만 내려온다.
				
				$('.mainBt').removeClass('addClassMainBt');
				$(this).addClass('addClassMainBt');
			}
	});
	
	// $('.mainBt').each(function(index){ //each함수
		// $(this).on({
			// mouseenter:	function(){
				// $('.sub').slideUp(200);
				// $('.sub').eq(index).slideDown(200);
				
				// $('.mainBt').removeClass('addClassMainBt');
				// $('.mainBt').eq(index).addClass('addClassMainBt');
			// }
		// });
	// })
	
	
	
	//선택자 (nav) 영역을 마우스가 떠나면(mouseleave)
	//메인메뉴와 배경 서브메뉴 모두 부드럽게 아래에서 위로 슬라이드 업(slideUp)
	$('.nav').on({
		mouseleave:	function(){
			$('.sub').stop().slideUp(300);
			 $('.mainBt').removeClass('addClassMainBt');
		}
	});
	
	
}); //header.js