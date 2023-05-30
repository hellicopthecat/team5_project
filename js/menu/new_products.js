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

  
// 메인 배너 자세히 보기 클릭시 슬라이더 펼치기 
$('.view_more').click(function(){
  $('.new_products_slider_wrap').slideToggle("fast");

  var arrowImage = $('.line_banner_right_toggle a').css('background-image');
  if (arrowImage.includes('down-arrow_wh.png')) {
      $('.line_banner_right_toggle a').css('background-image', 'url(../../../img/icons/up-arrow_wh.png)');
  } else {
      $('.line_banner_right_toggle a').css('background-image', 'url(../../../img/icons/down-arrow_wh.png)');
  }

});






// 이달의 신제품 펼쳐보기 토글 / 화살표 변경

$('.line_banner_right').click(function(){
  $('.new_products_slider_wrap').slideToggle("fast");

  var arrowImage = $('.line_banner_right_toggle a').css('background-image');
  if (arrowImage.includes('down-arrow_wh.png')) {
      $('.line_banner_right_toggle a').css('background-image', 'url(../../../img/icons/up-arrow_wh.png)');
  } else {
      $('.line_banner_right_toggle a').css('background-image', 'url(../../../img/icons/down-arrow_wh.png)');
  }
});


// 이달의 신제품 슬라이더
// 슬라이드 이미지들을 선택합니다.
const sliderContainer = document.querySelector('.new_products_slider ul');
const slides = Array.from(document.querySelectorAll('.new_products_slider ul li'));

// 슬라이드 인덱스와 슬라이드 간격을 초기화합니다.
let currentSlideIndex = 0;
const slideInterval = 2000; // 슬라이드 간격: 2초

// 다음 슬라이드로 이동하는 함수
function nextSlide() {
  // 현재 슬라이드를 숨깁니다.
  slides[currentSlideIndex].classList.remove('show');

  // 다음 슬라이드의 인덱스를 계산합니다.
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  // 다음 슬라이드를 보여줍니다.
  slides[currentSlideIndex].classList.add('show');
}

// 일정 간격마다 자동으로 슬라이드를 전환합니다.
setInterval(nextSlide, slideInterval);

const slider = document.querySelector('.new_products_slider ul');
let position = 0;
const slidesToShow = 1;
const slideWidth = 100 / slidesToShow;

function slideNext() {
  position -= slideWidth;
  if (position <= -(100 - slideWidth)) {
    position = 0;
  }
  slider.style.transform = `translateX(${position}%)`;
}

setInterval(slideNext, 2000);





// 년도별 신제품 모음 마우스휠 가로 스크롤

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






