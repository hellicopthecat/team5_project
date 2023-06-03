// 박스 영역 그림자 효과

    // $('.each_box_top').mouseenter(function(){
    //   $(this).addClass('shadow_effect');
    // });
  
    // $('.each_box_top').mouseleave(function(){
    //   $(this).removeClass('shadow_effect');
    // });

    // $('.each_box_bottom').mouseenter(function(){
    //   $(this).addClass('shadow_effect');
    // });
  
    // $('.each_box_bottom').mouseleave(function(){
    //   $(this).removeClass('shadow_effect');
    // });

$('.each_box_top, .each_box_bottom').on({
    mouseenter: function() {
        $(this).css({
        transform: 'translate(-3px, -3px)',
        transition: 'transform 0.3s ease',
        backgroundColor: 'rgba(255, 255, 255, 0.9)' // 배경 색상과 투명도 조절
        }).addClass('shadow_effect');

        $(this).find('h3').css('color', '#F26A25');
    },
    mouseleave: function() {
        $(this).css({
        transform: '',
        transition: 'transform 0.3s ease',
        backgroundColor: 'rgba(255, 255, 255, 0.8)' // 배경 색상과 투명도 조절
        }).removeClass('shadow_effect');

        $(this).find('h3').css('color', '#0D4633');
    }
    });