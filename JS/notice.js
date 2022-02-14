jQuery(function(){ //notice.js
	var cnt = -1;
	var n = 0;
	var setId;  //타이머 설정 변수 숫자 변수
	var t = 0; //toggle 변수 설정 초기값 0	
	var x = 0; //프로모션버튼의 정지와 플레이상태 토글변수
	var z = 0; //pagebt 버튼 초기값은 0인상태
	
	///////////////////////////////////////////////////////////////
	// 공지사항 최신글 롤링 텍스트 목록
	///////////////////////////////////////////////////////////////

	// 공지사항 텍스트 목록을 첫번째는 현재 보이고(5개)
	// 두번째는 아래에서 3초에 한번식 다음 목록이 부드럽게 올라온다
	// 그리고 zIndex는 현재 목록은 1로 설정 
	// 다음목록은 zIndex : 3
	// 그외 모든 목록은 zIndex : 2
	// 항상 현재 목록은만 제외하고 모두 top:100%(24픽셀 하단)에서 대기한다.
	
	setInterval(noticeListFn, 3000); //3초 마다 함수 호출 실행 무한 반복 
	
	function noticeListFn(){
		cnt++;
		if(cnt>3){
			cnt=-1;
		}
		// console.log(cnt<0?4:cnt, cnt+1);
		$('.noticeList').stop().animate({top:100+'%'},0).css({zIndex:2});
		$('.noticeList').eq(cnt<0?4:cnt).stop().animate({top:0},0).css({zIndex:1});
		$('.noticeList').eq(cnt+1).stop().animate({top:0},1000).css({zIndex:3});
	}
	
	

});//section2.js