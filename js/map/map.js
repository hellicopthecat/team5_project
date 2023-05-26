
        //  검색 숨기기 펼치기
        $('#show_btn').click(function () {
            $('#placesList_wrap').toggle()
            var arrow = $('#show_btn')[0].className
            if (
                arrow == 'arrow_show'
            ) {
                $('#show_btn').removeClass('arrow_show')
                $('#show_btn').addClass('arrow_hide')
            } else {
                $('#show_btn').addClass('arrow_show')
                $('#show_btn').removeClass('arrow_hide')

            }
        })

        // 퀵 검색 지역검색 변경

        $('#quick').click(() => {
            $('#quick').addClass('search_title_click')
            $('#region').removeClass()

            $('#search_bar').show()
            $('#placesList').show()
            $('#pagination').show()
            
            $('.back').hide()
            $('#step1').hide()

            ps.keywordSearch('뚜레쥬르 강남', placesSearchCB);
        })
        $('#region').click(() => {
            $('#placesList').hide()
            $('#pagination').hide()
            $('#step2').hide()

            $('#step').show()
            $('#search_bar').show()
            $('#step1').show()

            $('#region').addClass('search_title_click')
            $('#quick').removeClass()
            $('#seoul').hide()
            $('#gyeonggi').hide()
            $('#gwangju').hide()
            $('#daegu').hide()
            $('#busan').hide()
            $('#daejeon').hide()
            $('#ulsan').hide()
            $('#lncheon').hide()
            $('#gangwon').hide()
            $('#gyeongnam').hide()
             $('#gyeongbuk').hide()
            $('#jeonnam').hide()
            $('#jeonbuk').hide()
             $('#chungnam').hide()
            $('#chungbuk').hide()
            $('#jeju').hide()
        })

    

        // 지역검색 뒤로가기
        $('.back_btn').click(function(){
            $('.back').hide()
            $('.region_search').show()
        })
        // 지역검색 

        $('.step1_btn').click(function(){
        let rgo =  $(this).val()
        let rgolist = $('.step2_btn').val()
        $('#step2').show()

        for(i= 0 ; i < rgolist.length ;i++){
        if(rgo == '서울') {
            $('#seoul').show()
            $('.region_search').hide()

        }else if(rgo == '경기'){
            $('#gyeonggi').show()
            $('.region_search').hide()

        }else if(rgo == '광주'){
            $('#gwangju').show()
            $('.region_search').hide()

        }else if(rgo == '대구'){
            $('#daegu').show()
            $('.region_search').hide()

        }
        else if(rgo == '부산'){
            $('#busan').show()
            $('.region_search').hide()

        }
        else if(rgo == '대전'){
            $('#daejeon').show()
            $('.region_search').hide()
        }
        else if(rgo == '울산'){
            $('#ulsan').show()
            $('.region_search').hide()

        }
        else if(rgo == '인천'){
            $('#lncheon').show()
            $('.region_search').hide()

        }
        else if(rgo == '강원'){
            $('#gangwon').show()
            $('.region_search').hide()

        }
        else if(rgo == '경남'){
            $('#gyeongnam').show()
            $('.region_search').hide()
        }
        else if(rgo == '경북'){
            $('#gyeongbuk').show()
            $('.region_search').hide()

        }
        else if(rgo == '전남'){
            $('#jeonnam').show()
            $('.region_search').hide()
        }
        else if(rgo == '전북'){
            $('#jeonbuk').show()
            $('.region_search').hide()
        }
        else if(rgo == '충남'){
            $('#chungnam').show()
            $('.region_search').hide()
        }
        else if(rgo == '충북'){
            $('#chungbuk').show()
            $('.region_search').hide()

        }
        else if(rgo == '제주'){
            $('#jeju').show()
            $('.region_search').hide()

        }
    }
    })
    // 세종시 버튼
    $('#sejong').click(function(){
        console.log('됨')
        ps.keywordSearch('뚜레쥬르 세종시', placesSearchCB)
        $('#step1').hide()
            $('#search_bar').hide()
            $('#placesList').show()
            $('#pagination').show()
    })
    // 지역 버튼 누르면 검색 결과창 show  나머진 hide
    $('.list').click(function(){
            $('#step2').hide()
            $('#search_bar').hide()
            $('#placesList').show()
            $('#pagination').show()
    })

       // 오토 슬라이드
   var se = setInterval(function(){
    let s1 = $('#s1').attr('class')
    let s2 = $('#s2').attr('class')
    let s3 = $('#s3').attr('class')
     if(s1 == "ss"){
     $('#s1').removeClass('ss')
     $('#s2').addClass('ss')
    $('#page_1').removeClass('event_page_play')
    $('#page_2').removeClass('event_page')
    $('#page_2').addClass('event_page_play')
    $('#page_1').addClass('event_page')
     $('.event_slide').animate({left:'-1140px'})
     }else if(s2 == 'ss'){
        
      $('#s2').removeClass('ss')
     $('#s3').addClass('ss')
     $('#page_2').removeClass('event_page_play')
     $('#page_3').removeClass('event_page')
     $('#page_3').addClass('event_page_play')
     $('#page_2').addClass('event_page')
         $('.event_slide').animate({left:'-2280px'})
     }else if (s3 == 'ss'){
         $('#s3').removeClass('ss')
     $('#s4').addClass('ss')
     $('#page_3').removeClass('event_page_play')
     $('#page_1').removeClass('event_page')
     $('#page_1').addClass('event_page_play')
     $('#page_3').addClass('event_page')
         $('.event_slide').animate({left:'-3420px'})
         setTimeout(function(){
             $('#s4').removeClass('ss')
               $('#s1').addClass('ss')
             $('.event_slide').css({left:'0px'})
         },5000)
     }
 },5000)
 // 오토 슬라이드 중지 재생
 $('#pyst').click(function(){
     let play = $(this).attr('class')
     if(play == 'play'){
         $(this).removeClass('play')
         $(this).addClass('stop')
         clearInterval(se)
     }else {
         $(this).removeClass('stop')
         $(this).addClass('play')
         se = setInterval(function(){
            let s1 = $('#s1').attr('class')
            let s2 = $('#s2').attr('class')
            let s3 = $('#s3').attr('class')
             if(s1 == "ss"){
             $('#s1').removeClass('ss')
             $('#s2').addClass('ss')
            $('#page_1').removeClass('event_page_play')
            $('#page_2').removeClass('event_page')
            $('#page_2').addClass('event_page_play')
            $('#page_1').addClass('event_page')
             $('.event_slide').animate({left:'-1140px'})
             }else if(s2 == 'ss'){
                
              $('#s2').removeClass('ss')
             $('#s3').addClass('ss')
             $('#page_2').removeClass('event_page_play')
             $('#page_3').removeClass('event_page')
             $('#page_3').addClass('event_page_play')
             $('#page_2').addClass('event_page')
                 $('.event_slide').animate({left:'-2280px'})
             }else if (s3 == 'ss'){
                 $('#s3').removeClass('ss')
             $('#s4').addClass('ss')
             $('#page_3').removeClass('event_page_play')
             $('#page_1').removeClass('event_page')
             $('#page_1').addClass('event_page_play')
             $('#page_3').addClass('event_page')
                 $('.event_slide').animate({left:'-3420px'})
             }
            else if (s4 == 'ss'){
                $('#s4').removeClass('ss')
                $('#s1').addClass('ss')
              $('.event_slide').css({left:'-20px'})
            }
         },5000)
        }
 })

   // 슬라이드 오른쪽 가기 버튼
    $('.event_arrow_rt').click(function(event){
        let q=   $('#s1').attr('class')
         let w=  $('#s2').attr('class')
          let e=  $('#s3').attr('class')
         let r=  $('#s4').attr('class')
         if(q == 'ss'){
            $('.event_arrow_rt').prev
            $('#s1').removeClass('ss')
            $('#s2').addClass('ss')
            $('#page_1').removeClass('event_page_play')
               $('#page_2').removeClass('event_page')
               $('#page_2').addClass('event_page_play')
               $('#page_1').addClass('event_page')
                $('.event_slide').animate({left:'-1140px'})}
         else if (w == 'ss'){
                $('#s2').removeClass('ss')
                $('#s3').addClass('ss')
                $('#page_2').removeClass('event_page_play')
                $('#page_3').removeClass('event_page')
                $('#page_3').addClass('event_page_play')
                $('#page_2').addClass('event_page')
                    $('.event_slide').animate({left:'-2280px'})
            }else if ( e== 'ss'){
                $('#s3').removeClass('ss')
                $('#s4').addClass('ss')
                $('#page_3').removeClass('event_page_play')
                $('#page_1').removeClass('event_page')
                $('#page_1').addClass('event_page_play')
                $('#page_3').addClass('event_page')
                    $('.event_slide').animate({left:'-3420px'})
            }else if ( r== 'ss'){
                $('#s4').removeClass('ss')
                $('#s1').addClass('ss')
              $('.event_slide').css({left:'0px'})
      
         }
       })
     

          //  왼쪽 슬라이드 버튼
    $('.event_arrow_lt').click(function(){
        let one = $('#s1').attr('class')
        let two = $('#s2').attr('class')
        let three = $('#s3').attr('class')
        if(one == 'ss'){
            $('#s1').removeClass('ss')
     $('#s3').addClass('ss')
     $('#page_1').removeClass('event_page_play')
     $('#page_3').removeClass('event_page')
     $('#page_3').addClass('event_page_play')
     $('#page_1').addClass('event_page')
            $('.event_slide').css({left:'-3420px'})
            $('.event_slide').animate({left:'-2280px'})
        }else if(two == 'ss'){
            $('#s2').removeClass('ss')
     $('#s1').addClass('ss')
     $('#page_2').removeClass('event_page_play')
     $('#page_1').removeClass('event_page')
     $('#page_1').addClass('event_page_play')
     $('#page_2').addClass('event_page')
            $('.event_slide').animate({left:'0px'})
        }else if(three == 'ss'){
            $('#s3').removeClass('ss')
     $('#s2').addClass('ss')
     $('#page_3').removeClass('event_page_play')
     $('#page_2').removeClass('event_page')
     $('#page_2').addClass('event_page_play')
     $('#page_3').addClass('event_page')
     $('.event_slide').animate({left:'-1140px'})
        }
    })

       // 하단 페이지 버튼
       $('#page_1').click(function(){
        $('.event_slide').animate({left:'0px'})
        $('#page_1').removeClass()
        $('#page_2').removeClass()
        $('#page_3').removeClass()
        $('#page_2').addClass('event_page')
        $('#page_3').addClass('event_page')
        $('#page_1').addClass('event_page_play')
    })
    $('#page_2').click(function(){
        $('.event_slide').animate({left:'-1140px'})
        $('#page_1').removeClass()
        $('#page_2').removeClass()
        $('#page_3').removeClass()
        $('#page_3').addClass('event_page')
        $('#page_1').addClass('event_page')
        $('#page_2').addClass('event_page_play')
    })
    $('#page_3').click(function(){
        $('.event_slide').animate({left:'-2280px'})
        $('#page_1').removeClass()
        $('#page_2').removeClass()
        $('#page_3').removeClass()
        $('#page_2').addClass('event_page')
        $('#page_1').addClass('event_page')
        $('#page_3').addClass('event_page_play')
    })


    