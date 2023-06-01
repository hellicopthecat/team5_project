// 베스트, 신제품 스탬프 동작

var stamp = document.getElementById('stamp');
var scale = 1; // 초기 크기 비율
var increment = 0.01; // 크기 증가량
var targetScale = 1.2; // 목표 크기 비율
var intervalTime = 20; // 애니메이션 간격 (20밀리초)
var animationDuration = 5000; // 애니메이션 지속 시간 (5초)

function animateStamp() {
    var currentScale = parseFloat(window.getComputedStyle(stamp).getPropertyValue('transform').split(',')[3]); // 현재 크기 비율

    if (currentScale >= targetScale || currentScale <= 1) {
        increment *= -1;
    }

    scale += increment; // 크기를 증가시킴
    stamp.style.transform = 'scale(' + scale + ')'; // 크기를 적용

    // 애니메이션이 지속된 시간이 지나면 애니메이션을 멈추도록 함
    if (animationDuration <= 0) {
        clearInterval(animationInterval);
    }

    animationDuration -= intervalTime;
}

var animationInterval = setInterval(animateStamp, intervalTime); // 애니메이션 시작
setTimeout(function() {
    clearInterval(animationInterval); // 일정 시간 후 애니메이션 멈춤
}, animationDuration);





// 제품 이미지 줌렌즈

const imgContainer = document.getElementById("image_container");
const productImg = document.getElementById("product_image");
imgContainer.addEventListener("mousemove", onZoom);
imgContainer.addEventListener("mouseover", onZoom);
imgContainer.addEventListener("mouseleave", offZoom);

function onZoom(e) {
  const containerRect = imgContainer.getBoundingClientRect();
  const containerWidth = containerRect.width;
  const containerHeight = containerRect.height;
  
  const offsetX = e.clientX - containerRect.left;
  const offsetY = e.clientY - containerRect.top;
  
  const percentX = (offsetX / containerWidth) * 100;
  const percentY = (offsetY / containerHeight) * 100;
  
  productImg.style.transformOrigin = `${percentX}% ${percentY}%`;
  productImg.style.transform = "scale(2)";
}

function offZoom(e) {
  productImg.style.transformOrigin = `center center`;
  productImg.style.transform = "scale(1)";
}

