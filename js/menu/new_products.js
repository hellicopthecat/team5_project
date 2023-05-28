// 메인 신제품 배너 애니메이션

$( document ).ready( function() {
    var bannerTime = 600;
    $( '.bn_01' ).animate( {
      opacity: '1'
    }, bannerTime, function() {
      $( '.bn_02' ).animate( {
        opacity: '1'
      }, bannerTime, function() {
        $( '.bn_03' ).animate( {
          opacity: '1'
        }, bannerTime, function() {
            $( '.bn_04' ).animate( {
              opacity: '1'
            }, bannerTime, function() {
                $( '.bn_05' ).animate( {
                  opacity: '1'
                }, bannerTime, function() {
                    $( '.bn_06' ).animate( {
                      opacity: '1'
                    });
                });
            });
        });
      } );
    } );
  } );

  
//자세히 보기 클릭시 슬라이더 펼쳐보기 
$('.view_more').click(function(){
  $('.new_products_slider_wrap').slideToggle("fast");

  var arrowImage = $('.line_banner_right_toggle a').css('background-image');
  if (arrowImage.includes('down-arrow.png')) {
      $('.line_banner_right_toggle a').css('background-image', 'url(../../../img/icons/up-arrow.png)');
  } else {
      $('.line_banner_right_toggle a').css('background-image', 'url(../../../img/icons/down-arrow.png)');
  }
});






// 신제품 슬라이더 펼쳐보기 토글 / 화살표 변경

$('.line_banner_right').click(function(){
  $('.new_products_slider_wrap').slideToggle("fast");

  var arrowImage = $('.line_banner_right_toggle a').css('background-image');
  if (arrowImage.includes('down-arrow.png')) {
      $('.line_banner_right_toggle a').css('background-image', 'url(../../../img/icons/up-arrow.png)');
  } else {
      $('.line_banner_right_toggle a').css('background-image', 'url(../../../img/icons/down-arrow.png)');
  }
});



// 마우스휠 가로 스크롤

document.addEventListener('DOMContentLoaded', function() {
  
  // 마우스 휠 이벤트 핸들러
  function handleMouseWheel(event) {
    const delta = Math.sign(event.deltaY); // 마우스 휠 방향 (양수: 위로, 음수: 아래로)
    const scrollAmount = 300; // 스크롤할 양 (이미지의 가로 너비와 동일하도록 설정)
    const container = event.currentTarget; // 현재 이벤트가 발생한 요소 선택
    const currentScrollLeft = container.scrollLeft; // 현재 스크롤 위치
    const targetScrollLeft = currentScrollLeft + delta * scrollAmount; // 목표 스크롤 위치
    const duration = 5000; // 애니메이션 지속 시간 (밀리초)

    // 애니메이션 적용
    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
      duration: duration
    });

    event.preventDefault(); // 기본 스크롤 이벤트 막기
  }

  // 각각의 이미지 컨테이너에 이벤트 핸들러 등록
  const containers = document.querySelectorAll('.new_banners');
  containers.forEach(container => {
    container.addEventListener('wheel', handleMouseWheel);
  });


});








//년도별 신제품 배너들 가로 스크롤 




// $(document).ready(function() {
//   $(".new_banners").mCustomScrollbar({
//     theme: "rounded-dots-dark", // 스크롤 테마 종류
//     axis: "x", // 가로 스크롤 설정
//     advanced: {
//       autoExpandHorizontalScroll: true // 가로 스크롤 영역 자동 확장
//     }
//   });

// });











// $(document).ready(function() {
//   // 각각의 new_banners 요소에 대해 처리
//   $('.new_banners').each(function() {
//     var scrollContainer = this;
//     var scrollAmount = 100; // 스크롤 이동량 설정

//     // 가로 스크롤바 플러그인 적용
//     $(this).mCustomScrollbar({
//       theme: 'rounded-dots-dark', // 테마 설정
//       axis: 'x', // 가로 스크롤
//       advanced: {
//         autoExpandHorizontalScroll: true // 스크롤 영역 자동 확장
//       }
//     });

//     // 마우스 휠 이벤트 처리
//     $(this).on('wheel', function(event) {
//       event.preventDefault();
//       var delta = event.originalEvent.deltaX;

//       // 마우스 휠 방향에 따라 가로 스크롤 이동
//       if (delta < 0) {
//         scrollContainer.scrollLeft -= scrollAmount;
//       } else {
//         scrollContainer.scrollLeft += scrollAmount;
//       }
//     });
//   });
// });
