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
  if (arrowImage.includes('down-arrow.png')) {
      $('.line_banner_right_toggle a').css('background-image', 'url(../../../img/icons/up-arrow.png)');
  } else {
      $('.line_banner_right_toggle a').css('background-image', 'url(../../../img/icons/down-arrow.png)'); 
  }

});




// 이달의 신제품 펼쳐보기 토글 / 화살표 변경

$('.line_banner_right').click(function(){
  $('.new_products_slider_wrap').slideToggle("fast");

  var arrowImage = $('.line_banner_right_toggle').css('background-image');
  if (arrowImage.includes('down-arrow.png')) {
      $('.line_banner_right_toggle').css('background-image', 'url(../../../img/icons/up-arrow.png)');
      $('.line_banner_right').css('background-color', '#fff');
  } else {
      $('.line_banner_right_toggle').css('background-image', 'url(../../../img/icons/down-arrow.png)');
      $('.line_banner_right').css('background-color', '#DADFCB');
  }
});






// 이달의 신제품 슬라이더

const box = document.querySelector('.slider-container');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let absPosX = 1;
let timer;

btn1.addEventListener('click', () => {
  goToSlide(1);
});

btn2.addEventListener('click', () => {
  goToSlide(2);
});

btn3.addEventListener('click', () => {
  goToSlide(3);
});

btn4.addEventListener('click', () => {
  goToSlide(4);
});

const max = 4;

btnPrev.addEventListener('click', () => {
  if (absPosX !== 1) {
    goToSlide(absPosX - 1);
  } else {
    goToSlide(max);
  }
});

btnNext.addEventListener('click', () => {
  if (absPosX !== max) {
    goToSlide(absPosX + 1);
  } else {
    goToSlide(1);
  }
});


// 자동 슬라이드 시작
function startAutoSlide() {
  timer = setInterval(() => {
    if (absPosX !== max) {
      goToSlide(absPosX + 1);
    } else {
      goToSlide(1);
    }
  }, 3000);
}

// 자동 슬라이드 정지
function stopAutoSlide() {
  clearInterval(timer);
}

// 슬라이드 이동 함수
function goToSlide(position) {
  absPosX = position;
  box.style.transform = `translateX(-${(position - 1) * 100}vw)`;
}

// 페이지 로드 시 자동 슬라이드 시작
window.addEventListener('load', () => {
  startAutoSlide();
});

// 슬라이더에 마우스 호버 시 자동 슬라이드 정지
box.addEventListener('mouseover', () => {
  stopAutoSlide();
});

// 슬라이더에서 마우스 벗어날 시 자동 슬라이드 재시작
box.addEventListener('mouseout', () => {
  startAutoSlide();
});








// 모달창 띄우기 닫기

$('#modal_open_01').click(function(){
  $('#modal_01').display(block);
}) 

$('#modal_close_01').click(function(){
  $('#modal_01').display(none);
})








// 년도별 신제품 모음 마우스휠 가로 스크롤

document.addEventListener('DOMContentLoaded', function() {
  
  // 마우스 휠 이벤트 핸들러
  function handleMouseWheel(event) {
    const delta = Math.sign(event.deltaY); // 마우스 휠 방향 (양수: 위로, 음수: 아래로)
    const scrollAmount = 400; // 스크롤할 양 (이미지의 가로 너비와 동일하도록 설정)
    const container = event.currentTarget; // 현재 이벤트가 발생한 요소 선택
    const currentScrollLeft = container.scrollLeft; // 현재 스크롤 위치
    const targetScrollLeft = currentScrollLeft + delta * scrollAmount; // 목표 스크롤 위치
    const duration = 3000; // 애니메이션 지속 시간 (밀리초)
    

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






