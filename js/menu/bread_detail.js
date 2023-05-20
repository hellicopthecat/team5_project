document.addEventListener('DOMContentLoaded', function() {
    var imageContainer = document.querySelector('.image_container');
    var productImage = document.querySelector('.product_image');
    var zoomFrame = document.querySelector('.zoom_frame');
    var zoomedImageContainer = document.querySelector('.zoomed_image_container');
    var zoomedImage = document.querySelector('.zoomed_image');
  
    // 마우스가 이미지 영역 위에 올라갈 때 이벤트 처리
    imageContainer.addEventListener('mouseenter', function() {
      zoomFrame.style.display = 'block';
      zoomedImageContainer.style.opacity = 1;
    });
  
    // 마우스가 이미지 영역 위에서 벗어날 때 이벤트 처리
    imageContainer.addEventListener('mouseleave', function() {
      zoomFrame.style.display = 'none';
      zoomedImageContainer.style.opacity = 0;
    });
  
    // 마우스 이동에 따라 이너 프레임 위치 변경 및 확대 이미지 위치 변경
    imageContainer.addEventListener('mousemove', function(event) {
      var containerRect = imageContainer.getBoundingClientRect();
      var mouseX = event.clientX - containerRect.left;
      var mouseY = event.clientY - containerRect.top;
  
      // 이너 프레임 위치 설정
      var frameX = mouseX - zoomFrame.offsetWidth / 2;
      var frameY = mouseY - zoomFrame.offsetHeight / 2;
  
      // 이미지 확대 위치 설정
      var zoomedImageX = -frameX * (zoomedImage.offsetWidth / productImage.offsetWidth);
      var zoomedImageY = -frameY * (zoomedImage.offsetHeight / productImage.offsetHeight);
  
      // 이너 프레임이 이미지 영역 내에서만 이동하도록 제한
      if (frameX < 0) {
        frameX = 0;
      } else if (frameX > imageContainer.offsetWidth - zoomFrame.offsetWidth) {
        frameX = imageContainer.offsetWidth - zoomFrame.offsetWidth;
      }
      if (frameY < 0) {
        frameY = 0;
      } else if (frameY > imageContainer.offsetHeight - zoomFrame.offsetHeight) {
        frameY = imageContainer.offsetHeight - zoomFrame.offsetHeight;
      }
  
      zoomFrame.style.left = frameX + 'px';
      zoomFrame.style.top = frameY + 'px';
      zoomedImage.style.transform = 'translate(' + zoomedImageX + 'px, ' + zoomedImageY + 'px)';
    });
  });
  