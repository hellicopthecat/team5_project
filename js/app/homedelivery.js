 
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

