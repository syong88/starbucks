//mainSlide.js
jQuery(function(){
	var cnt=0;  //메인슬라이드 카운트 전역변수
	var setId;  //타이머의 변수
	var play=0; //플레이가 정지상태의 변수
	var t=0;    //정지와 시작버튼에 사용 토글변수
	var current=0; //현재 실행중인 슬라이드 포지션 영역에 마우스 오버시 1로 설정하여 중지상태임을 알려주는 변수
	
	//프로모션 버튼 클릭 이벤트 
	//   가. 메인슬라이드 아래로 부드럽게 오픈 slideDown
	//      또한번 클릭하면 위로 부드럽게 크로스 된다. slideUp
	//      버튼하나가 두가지 기능을 수행하는 토글기능 이용 slideToggle(300);
	//   나. 자기자신(this) 버튼의 백그라운드 이미지가 변경 down <-> up toggleClass (버튼왔다갔다해야하기에 토글)
	//   다. 슬라이드가 완성되면 - 추가기능 : 슬라이드가 실행 그리고 정지와 초기화
	$('.promotionBt').on({
		click:	function(){
			$('.section2-slide').stop().slideToggle(300);  //슬라이드가 토글방식
			$(this).toggleClass('addClassUpbt');  //배경이미지변경 토글방식 (윗줄아랫줄 바뀌어도됨)
			
			if( play==0 ){
				play=1; //play = on 상태
				
				//타이머 함수 호출 실행 (프로모션버튼누르면 바로실행되는 것)
				autoPlayFn(); 
			}
			else if( play==1 ){
				play=0;
				//슬라이드 포지션 초기화
				clearInterval( setId ); //메인슬라이드 호출하는 타이머를 중지
				cnt=0;
				$('.slide-wrap').stop().animate({marginLeft:-1230+(-820*cnt)},0);
				//슬라이드의 각각의 투명도 흐리게 초기화
				$('.slide').css({opacity:.3});
				$('.slide').eq(cnt+1).css({opacity:1}); //1개만 선명하게
				//페이지버튼 초기화
				$('.pageBt').find('img').attr('src', 'img/main_prom_off.png');
				$('.pageBt').eq(0).find('img').attr('src', 'img/main_prom_on.png');
				//정지&시작버튼 초기화
				t=0; //플레이상태
				$('.stopPlayBt').find('img').attr('src', 'img/main_prom_stop.png');
				
			}		
		}
	});
	
		
		//정지버튼(stop):타이머중지 & 시작버튼(play):타이머함수 호출 
		$('.stopPlayBt').on({
			click:	function(){
				//한번 클릭하면 타이머정지
				if(t==0){
					t=1; //마크
					clearInterval( setId ); //중지 (타이머의아이디변수)
					$(this).find('img').attr('src','img/main_prom_play.png'); // ▶
				}
				//또한번 클릭하면 타이머시작
				else if(t==1){
					t=0; //마크
					autoPlayFn(); //재시작
					$(this).find('img').attr('src','img/main_prom_stop.png'); // ||
					 
				}
			}
		});
		
		
		//페이지네이션버튼 클릭 이벤트
		//클릭하면 해당 인덱스번호를 가져와서 cnt=인덱스
		$('.pageBt').each(function(index){
			$(this).on({
				click:	function(){
					cnt=index; //해당버튼번호(인덱스)가 슬라이드 번호로 대입
					mainSlideFn(); //메인슬라이드 호출
				}
			});
		})
		
		//다음 슬라이드 클릭 이벤트
		$('.nextBt').on({
			click:	function(){
				cnt++;
				mainSlideFn();
			}
		});
		
		//이전 슬라이드 클릭 이벤트
		$('.prevBt').on({
			click:	function(){
				cnt--;
				mainSlideFn();
			}
		});
		
		//타이머 함수
		function autoPlayFn(){
			setId = setInterval(function(){
				cnt++;
				mainSlideFn();
			},3000); //셋인터벌 타이머는 3초후에 실행
		}
	
	
	//메인슬라이드 구현
	//   가. 우측에서 좌측으로 -820px 씩 이동하는 슬라이드 애니메이션 구현
	//   나. 타이머를 이용해서 3초에 한번씩 실행 계속
	function mainSlideFn(){
		
		$('.slide-wrap').stop().animate({marginLeft:-1230+(-820*cnt)},400, function(){
			//이전슬라이드 예외조건
			if(cnt<0){ //0미만이면 슬라이드3개중
				cnt=2; //2 세번째 슬라이드인 마지막 슬라이드로 초기화
				$('.slide-wrap').stop().animate({marginLeft:-1230+(-820*2)},0);				
			}
			//다음슬라이드 예외조건
			if(cnt>=3){
				cnt=0; //0
				$('.slide-wrap').stop().animate({marginLeft:-1230+(-820*0)},0);
			}
			//1 2 0 1 2 0 1 2 ...
			$('.slide').css({opacity:.3});
			$('.slide').eq(cnt+1).css({opacity:1});
			
			//페이지네이션버튼(슬라이드 인디게이터버튼)
			$('.pageBt').find('img').attr('src', 'img/main_prom_off.png');
			$('.pageBt').eq(cnt).find('img').attr('src', 'img/main_prom_on.png');
			
			
			//현재슬라이드 영역에 마우스 오버(mouseenter)와 아웃(mouseleave) 이벤트
			//단, 현재 슬라이드가 플레이상태(t==0)에서만 마우스오버시 자동 타이머 정지
			//								 마우스아웃시 자동 타이머 플레이
			$('.slide').each(function(index){ //0,1 ..4
				$(this).on({
					mouseenter: function(){
						console.log(index);
						if( index==(cnt+1) ){ //현재 실행중인 번호와 마우스오버된 위치 인덱스번호 비교같을때
							if(t==0){ //긍정문 t==0 플레이되고있을 때 / 부정문 t!=1(변수t값이 1이아니면)
								clearInterval( setId ); // 자동 타이머 정지
								//마우스 오버시 중지된 상태임을 전달하는 변수
								current=1;
							}
						}
					},
					mouseleave:	function(){ //현재 슬라이드를 마우스 떠난상태여서 계속 타이머를 호출 실행
						console.log('마우스오버슬라이드번호: ' + index, '현재실행슬라이드번호:' + (cnt+1) );
						if( index==(cnt+1) ){ 
							if(t==0){ //긍정문 현재 슬라이드가 실행중인 상태의 변수
								if(current==1){ //현재 마우스 오버로 중지된 상태임
									autoPlayFn(); // 자동 타이머 플레이 한번 호출
									current=0; //변수 초기화
								}
							}
						}
					}
				});	//this on 끝			
			}); //each() 메소드 배열 끝
			
		}); 
		
	}
	
	
	
	
	
});