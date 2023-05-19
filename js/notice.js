$(document).ready(function(){

  // 페이지 넘버 클릭시
  $(".notice .inner .page-number-box > ul > li").click(function(){
      $(".notice .inner .page-number-box > ul > li").removeClass("active");
      $(this).addClass("active");
  });

});