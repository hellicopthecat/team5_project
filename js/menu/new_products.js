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

const box = document.querySelector('.slider-container');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');


let absPosX = 1;

btn1.addEventListener('click', () => {
  box.style.transform = 'translateX(0vw)'
  absPosX = 1;
});

btn2.addEventListener('click', () => {
  box.style.transform = 'translateX(-100vw)';
  absPosX = 2;
});

btn3.addEventListener('click', () => {
  box.style.transform = 'translateX(-200vw)';
  absPosX = 3;
});

btn4.addEventListener('click', () => {
  box.style.transform = 'translateX(-300vw)';
  absPosX = 4;
});

btn4.addEventListener('click', () => {
  box.style.transform = 'translateX(-300vw)';
  absPosX = 4;
});

const max = 4;

prev.addEventListener('click', () => {
  if (absPosX !== 1) {
    box.style.transform = 'translateX(-' +(absPosX-2)*100 + 'vw)';
    absPosX -=1;
  } else{
    absPosX = max;
    box.style.transform = 'translateX(-' +(absPosX-1)*100 + 'vw)';
  }
})

next.addEventListener('click', () => {
  if (absPosX !== max) {
    box.style.transform = 'translateX(-' + absPosX*100 + 'vw)';
    absPosX +=1;
  } else{
    absPosX = 1;
    box.style.transform = 'translateX(-' + 0 + 'vw)';
  }
})




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






