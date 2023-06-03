 
                $('.product_wrap').mouseenter(function(){
                    let iif=  $('.product_wrap').attr('id')
                    let a=$(this).attr('id','cs')
                    if(a = 'cs'){
                        $('#cs .deli_see_more').slideDown()
                        $('#cs ').removeAttr('id')
                    }
                    $(this).addClass('product_event')

                })
                          
            $('.product_wrap').mouseleave(function(){
                    let a=$(this).attr('id','cs')
                    if(a = 'cs'){
                        $('#cs .deli_see_more').slideUp()
                             $('#cs ').removeAttr('id')
                    }
                    $(this).removeClass('product_event')

                })


                    $('.basket_go').click(()=>{
                        let basket_ok = confirm("장바구니로 이동하시겠습니까?")
                        if(basket_ok){
                         
                            window.location.href ='../../main/mypage.html';
                        }else{
                            alert("취소하셨습니다.")
                        }
                    })