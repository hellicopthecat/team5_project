 
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
//     // 구메예정금액 짜기
//     const click01 = document.querySelectorAll('.check_click01')
          
//     let main_val01 = document.getElementById("main_val01").value
//     let big_val01 = document.getElementById("big_val01").value
//     let small_val01 = document.getElementById("small_val01").value
//     let hat_val01= document.getElementById("hat_val01").value
  
//     main_val01 = Number(main_val01) 
//     big_val01 = Number(big_val01)
//     small_val01= Number(small_val01)
//     hat_val01= Number(hat_val01)
 
//     total_m01 = 0
//     total_b01 = 0
//     total_s01 =  0
//     total_h01 =0
//     for(i = 0 ; i < click01.length ; i++){

//         if( click01[i].getAttribute('id') ==  "main_pl"){
            
//            var a = click01[i].addEventListener('click' ,function(){
//                 main_val01 = main_val01 + 1
//                 $('#main_val01').attr("value", main_val01)

//                total_m01 = 54000 * main_val01
//                total01 = total_b01 + total_m01 + total_s01 + total_h01
//      document.getElementById('total').innerHTML = total01+' 원'
//             })    
//         }else if (click01[i].getAttribute('id') ==  "main_mn" ){

//             click01[i].addEventListener('click' , function(){
//                 if(main_val01 !== 1){
//                 main_val01 =  main_val01 - 1
//                 $('#main_val01').attr("value", main_val01) 
//                     total_m01 = 54000 * main_val01
//                     total01 = total_b01 + total_m01 + total_s01 + total_h01
    
//                     document.getElementById('total').innerHTML = total01+' 원'
//                 }
//                 })           
        
//             }else if(click01[i].getAttribute('id') == "big_pl"  ){
            
//             click01[i].addEventListener('click' , function(){
//                 $('#big_val01').attr("value", big_val01 + 1) 
//                 big_val01 = big_val01 + 1
            
//                 total_b01 = 9000 * big_val01
       
          
//                 total01 = total_b01 + total_m01+ total_s01+ total_h01
    
//                 document.getElementById('total').innerHTML = total01+' 원'
//         })     
//      }else if(click01[i].getAttribute('id') == "big_mn" ){

//         click01[i].addEventListener('click' , function(){
//             if(big_val01 !== 1){
//             $('#big_val01').attr("value", big_val01 -1) 

//           big_val01 = big_val01 - 1 
          
//           total_b01 = 9000 * big_val01
          
//                     total01 = total_b01 + total_m01+ total_s01 + total_h01

//      document.getElementById('total').innerHTML = total01+ ' 원'
//             }
//         })
//      }else if(click01[i].getAttribute('id') == "small_pl" ){
         
//         click01[i].addEventListener('click' , function(){
           
//             $('#small_val01').attr("value", small_val01+ 1) 

//            small_val01 = small_val01 + 1

//              total_s01 = 7000 * small_val01

//              total01 = total_b01 + total_m01 + total_s01 + total_h01

//       document.getElementById('total').innerHTML = total01+' 원'
//          })     

//     }else if(click01[i].getAttribute('id') == "small_mn" ){

//         click01[i].addEventListener('click' , function(){
//             if(small_val01 !== 1){
//             $('#small_val01').attr("value", small_val01 - 1) 

//            small_val01 = small_val01 - 1
          
//              total_s01 = 7000 * small_val01

//              total01 = total_b01 + total_m01 + total_s01 + total_h01

//       document.getElementById('total').innerHTML = total01+' 원'
//     }

//          })     

     
//     }else if(click01[i].getAttribute('id') == "hat_pl" ){
         
//          click01[i].addEventListener('click' , function(){

//             $('#hat_val01').attr("value", hat_val01+ 1) 

//             hat_val01 = hat_val01 + 1

//               total_h01 = 2000 * hat_val01

//               total01= total_b01 + total_m01 + total_s01 + total_h01

//        document.getElementById('total').innerHTML = total01+' 원'

//           })     

//      }else if(click01[i].getAttribute('id') == "hat_mn" ){
//          click01[i].addEventListener('click' , function(){
//             if(hat_val01 !== 1){
//             $('#hat_val01').attr("value", hat_val01 - 1) 

//             hat_val01 = hat_val01 - 1

//               total_h01 = 2000 * hat_val01

//               total01 = total_b01 + total_m01 +  total_s01 + total_h01

//        document.getElementById('total').innerHTML = total01+' 원'
//             }
//           })     
         
      
//      }
   

//      total_m01 = 54000


//     }

//                 // 옵션 체크시 추가되는 사항들
              
//                 function ps01 (){
//                     let op = document.getElementById('se01')
//                     let va = (op.options[op.selectedIndex].value) 
//                  if(va =='big01'){
//                     alert('추가옵션을 선택했습니다')
//                     $('#bigs01').removeClass('hides')
//                        $('#bigs01').show()
//                        $('#big_val01').attr("value", big_val01 ) 
                   
//                        total_b01 = 9000 * big_val01
              
                 
//                        total01 = total_b01 + total_m01 + total_s01 + total_h01
           
//                        document.getElementById('total').innerHTML = total01+' 원'
//                     }else if (va == 'small01'){
//                         alert('추가옵션을 선택했습니다')
//                         $('#smalls01').removeClass('hides')
//                         $('#smalls01').show()


//                 $('#small_val01').attr("value", small_val01) 

               
 
//                   total_s01 = 7000 * small_val01
 
//                   total01 = total_b01 + total_m01 + total_s01 + total_h01
 
//            document.getElementById('total').innerHTML = total01+' 원'
//                     }else if (va == 'hat01'){
//                         alert('추가옵션을 선택했습니다')
           
//                         $('#hats01').removeClass('hides')
//                         $('#hats01').show()

//                 $('#hat_val01').attr("value", hat_val01) 

//                   total_h01 = 2000 * hat_val01

//                   total01 = total_b01 + total_m01 + total_s01 + total_h01

//            document.getElementById('total').innerHTML = total01+' 원'
                   
//                 }  
//             // 닫기 버튼

//                 $('#close_hat01').click(()=>{
//                     $('#hats01').addClass('hides')
//                   $('#hats01').hide()
                
//                   $('#hat_val01').attr("value", 0) 
                   
//                   total_h01 = 0
         
            
//                   total01 = total_b01 + total_m01 + total_s01 + total_h01
      
//                   document.getElementById('total').innerHTML = total01+' 원'
//                 })
            
//                 $('#close_small01').click(()=>{
//                     $('#smalls01').addClass('hides')
//                   $('#smalls01').hide()

//                   $('#small_val01').attr("value", 0) 
                   
//                   total_s01 = 0
         
            
//                     total01 = total_b01 + total_m01 + total_s01 + total_h01
      
//                   document.getElementById('total').innerHTML = total01+' 원'
//                 })
            
//                 $('#close_big01').click(()=>{
//                     $('#bigs01').addClass('hides')
//                     $('#bigs01').hide()

//                     $('#big_val01').attr("value", 0) 
                   
//                     total_b01 = 0
           
              
//                     total01 = total_b01 + total_m01 + total_s01 + total_h01
        
//                     document.getElementById('total').innerHTML = total01+' 원'
//                 })
            
            
                
//             }
               
        
//         // 모달창 띄우기 없애기
//     $('#modal_close_01').click(function(){
//         $('#modal_01').fadeOut()
//         $('#smalls01').addClass('hides')
//         $('#hats01').hide()
//         $('#smalls01').hide()
//          $('#bigs01').hide()
//         $('#big_val01').attr("value", 0) 
//         $('#small_val01').attr("value", 0) 
//         $('#hat_val01').attr("value", 0) 
//         big_val01 = 1
//         small_val01 = 1
//         hat_val01 = 1
//         total_s01 = 0
//         total_b01 = 0
//         total_h01 = 0

  
//         total01 = total_b01 + total_m01 + total_s01 + total_h01

//         document.getElementById('total').innerHTML = total01+' 원'
      
//      })
//     $("#modal_btn_1").click(function(){
//         $('#modal_01').fadeIn()
//     }) 
       


//       // 구메예정금액 짜기
//       const click02 = document.querySelectorAll('.check_click02')
          
//       let main_val02 = document.getElementById("main_val02").value
//       let big_val02 = document.getElementById("big_val02").value
//       let small_val02 = document.getElementById("small_val02").value
//       let hat_val02= document.getElementById("hat_val02").value
    
     
//       main_val02 = Number(main_val02) 
//       big_val02 = Number(big_val02)
//       small_val02= Number(small_val02)
//       hat_val02= Number(hat_val02)
   
//       total_m02 = 0
//       total_b02 = 0
//       total_s02 =  0
//       total_h02 =0
//       for(i = 0 ; i < click02.length ; i++){

//           if( click02[i].getAttribute('id') ==  "main_pl"){
              
//              var a = click02[i].addEventListener('click' ,function(){
//                   main_val02 = main_val02 + 1
//                   $('#main_val02').attr("value", main_val02)

//                  total_m02 = 39000 * main_val02
//                  total02 = total_b02 + total_m02 + total_s02 + total_h02
//        document.getElementById('total02').innerHTML = total02+' 원'
//               })    
//           }else if (click02[i].getAttribute('id') ==  "main_mn" ){

//               click02[i].addEventListener('click' , function(){
//                   if(main_val02 !== 1){
//                       main_val02 = main_val02 - 1
//                       $('#main_val02').attr("value", main_val02)
  
//                      total_m02 = 39000 * main_val02
//                      total02 = total_b02 + total_m02 + total_s02 + total_h02
//            document.getElementById('total02').innerHTML = total02+' 원'
//                   }
//                   })           
          
//               }else if(click02[i].getAttribute('id') == "big_pl"  ){
              
//               click02[i].addEventListener('click' , function(){
//                   big_val02 = big_val02 + 1
//                   $('#big_val02').attr("value", big_val02 ) 
              
//                   total_b02 = 9000 * big_val02
         
            
//                   total02 = total_b02 + total_m02+ total_s02+ total_h02
      
//                   document.getElementById('total02').innerHTML = total02+' 원'
              
//           })     
//        }else if(click02[i].getAttribute('id') == "big_mn" ){

//           click02[i].addEventListener('click' , function(){
//               if(big_val02 !== 1){
//                   big_val02 = big_val02 - 1
//                   $('#big_val02').attr("value", big_val02) 
              
//                   total_b02 = 9000 * big_val02
         
            
//                   total02 = total_b02 + total_m02+ total_s02+ total_h02
      
//                   document.getElementById('total02').innerHTML = total02+' 원'
//               }
//           })
//        }else if(click02[i].getAttribute('id') == "small_pl" ){
           
//           click02[i].addEventListener('click' , function(){
             
//               small_val02 = small_val02 + 1
//               $('#small_val02').attr("value", small_val02) 


//                total_s02 = 7000 * small_val02

//                total02 = total_b02 + total_m02 + total_s02 + total_h02

//         document.getElementById('total02').innerHTML = total02+' 원'
//            })     

//       }else if(click02[i].getAttribute('id') == "small_mn" ){

//           click02[i].addEventListener('click' , function(){
//               if(small_val02 !== 1){
//                   small_val02 = small_val02 - 1
//               $('#small_val02').attr("value", small_val02 ) 

          

//               total_s02 = 7000 * small_val02

//               total02 = total_b02 + total_m02 + total_s02 + total_h02

//        document.getElementById('total02').innerHTML = total02+' 원'
//       }

//            })     

       
//       }else if(click02[i].getAttribute('id') == "hat_pl" ){
           
//            click02[i].addEventListener('click' , function(){
//                hat_val02 = hat_val02 + 1

//               $('#hat_val02').attr("value", hat_val02) 


//                 total_h02= 2000 * hat_val02

//                 total02= total_b02 + total_m02 + total_s02 + total_h02

//          document.getElementById('total02').innerHTML = total02+' 원'

//             })     

//        }else if(click02[i].getAttribute('id') == "hat_mn" ){
//            click02[i].addEventListener('click' , function(){
//               if(hat_val02 !== 1){
//                   hat_val02 = hat_val02 - 1
//               $('#hat_val02').attr("value", hat_val02 ) 


//               total_h02= 2000 * hat_val02

//               total02= total_b02 + total_m02 + total_s02 + total_h02

//        document.getElementById('total02').innerHTML = total02+' 원'
//               }
//             })     
           
        
//        }
     

//        total_m02 = 39000
  

//       }

// // 옵션추가
//                 function ps02 (){
//                     let op = document.getElementById('se02')
//                     let va = (op.options[op.selectedIndex].value) 
//                  if(va =='big02'){
//                     alert('추가옵션을 선택했습니다')
//                     $('#bigs02').removeClass('hides')
//                        $('#bigs02').show()
//                        $('#big_val02').attr("value", big_val02 ) 
                   
//                        total_b02 = 9000 * big_val02
              
                 
//                        total02 = total_b02 + total_m02 + total_s02 + total_h02
           
//                        document.getElementById('total02').innerHTML = total02+' 원'
//                     }else if(va =='small02'){
//                         alert('추가옵션을 선택했습니다')
//                         $('#smalls02').removeClass('hides')
//                            $('#smalls02').show()
//                            $('#small_val02').attr("value", small_val02 ) 
                       
//                            total_s02 = 7000 * small_val02
                  
                     
//                            total02 = total_b02 + total_m02 + total_s02 + total_h02
               
//                            document.getElementById('total02').innerHTML = total02+' 원'
//                     }else if(va =='hat02'){
//                         alert('추가옵션을 선택했습니다')
//                         $('#hats02').removeClass('hides')
//                            $('#hats02').show()
//                            $('#hat_val02').attr("value", hat_val02 ) 
                       
//                            total_h02 = 2000 * hat_val02
                  
                     
//                            total02 = total_b02 + total_m02 + total_s02 + total_h02
               
//                            document.getElementById('total02').innerHTML = total02+' 원'
//                     }
//             // 닫기 버튼

//                 $('#close_hat02').click(()=>{
//                   $('#hats02').hide()
//                   $('#hats02').addClass('hides')

//                   $('#hat_val02').attr("value", 0) 
                   
//                   total_h02 = 0
         
            
//                   total02 = total_b02 + total_m02 + total_s02 + total_h02
      
//                   document.getElementById('total02').innerHTML = total02+' 원'
//                 })
            
//                 $('#close_small02').click(()=>{
//                     $('#smalls02').hide()
//                     $('#smalls02').addClass('hides')
                  
//                     $('#small_val02').attr("value", 0) 
                     
//                     total_s02 = 0
           
              
//                     total02 = total_b02 + total_m02 + total_s02 + total_h02
        
//                     document.getElementById('total02').innerHTML = total02+' 원'
//                   })
              
//                   $('#close_big02').click(()=>{
//                     $('#bigs02').hide()
//                     $('#bigs02').addClass('hides')
                  
//                     $('#big_val02').attr("value", 0) 
                     
//                     total_b02 = 0
           
              
//                     total02 = total_b02 + total_m02 + total_s02 + total_h02
        
//                     document.getElementById('total02').innerHTML = total02+' 원'
//                   })
//                 }
      
//         // 모달창 띄우기 없애기
//     $('#modal_close_02').click(function(){
//         $('#modal_02').fadeOut()
//         $('#smalls02').addClass('hides')
//         $('#hats02').hide()
//         $('#smalls02').hide()
//          $('#bigs02').hide()
//         $('#big_val02').attr("value", 0) 
//         $('#small_val02').attr("value", 0) 
//         $('#hat_val02').attr("value", 0) 
//         main_val02 = 1
//         big_val02 = 1
//         small_val02 = 1
//         hat_val02 = 1
//         total_s02 = 0
//         total_b02 = 0
//         total_h02 = 0

  
//         total02 = total_b02 + total_m02 + total_s02 + total_h02

//         document.getElementById('total02').innerHTML = total02+' 원'
      
//      })
//     $("#modal_btn_2").click(function(){
//         $('#modal_02').fadeIn()
//     }) 

 

//     //   구메예정금액 짜기
//       const click03 = document.querySelectorAll('.check_click03')
          
//       let main_val03 = document.getElementById("main_val03").value
//       let big_val03 = document.getElementById("big_val03").value
//       let small_val03 = document.getElementById("small_val03").value
//       let hat_val03= document.getElementById("hat_val03").value
    
     
//       main_val03 = Number(main_val03) 
//       big_val03 = Number(big_val03)
//       small_val03= Number(small_val03)
//       hat_val03= Number(hat_val03)
   
//       total_m03 = 0
//       total_b03 = 0
//       total_s03 =  0
//       total_h03 =0
//       for(i = 0 ; i < click03.length ; i++){

//           if( click03[i].getAttribute('id') ==  "main_pl"){
              
//              var a = click03[i].addEventListener('click' ,function(){
//                   main_val03 = main_val03 + 1
//                   $('#main_val03').attr("value", main_val03)

//                  total_m03 = 45000 * main_val03
//                  total03 = total_b03 + total_m03 + total_s03 + total_h03
//        document.getElementById('total03').innerHTML = total03+' 원'
//               })    
//           }else if (click03[i].getAttribute('id') ==  "main_mn" ){

//               click03[i].addEventListener('click' , function(){
//                   if(main_val03 !== 1){
//                     main_val03 = main_val03 - 1
//                     $('#main_val03').attr("value", main_val03)
  
//                    total_m03 = 45000 * main_val03
//                    total03 = total_b03 + total_m03 + total_s03 + total_h03
//          document.getElementById('total03').innerHTML = total03+' 원'
//                   }
//                   })           
          
//               }else if(click03[i].getAttribute('id') == "big_pl"  ){
              
//               click03[i].addEventListener('click' , function(){
//                   big_val03 = big_val03 + 1
//                   $('#big_val03').attr("value", big_val03 ) 
              
//                   total_b03 = 9000 * big_val03
         
            
//                   total03 = total_b03 + total_m03+ total_s03+ total_h03
      
//                   document.getElementById('total03').innerHTML = total03+' 원'
              
//           })     
//        }else if(click03[i].getAttribute('id') == "big_mn" ){

//           click03[i].addEventListener('click' , function(){
//               if(big_val03 !== 1){
//                 big_val03 = big_val03 - 1
//                 $('#big_val03').attr("value", big_val03 ) 
            
//                 total_b03 = 9000 * big_val03
       
          
//                 total03 = total_b03 + total_m03+ total_s03+ total_h03
    
//                 document.getElementById('total03').innerHTML = total03+' 원'
//               }
//           })
//        }else if(click03[i].getAttribute('id') == "small_pl" ){
           
//           click03[i].addEventListener('click' , function(){
             
//               small_val03 = small_val03 + 1
//               $('#small_val03').attr("value", small_val03) 


//                total_s03 = 7000 * small_val03

//                total03 = total_b03 + total_m03 + total_s03 + total_h03

//         document.getElementById('total03').innerHTML = total03+' 원'
//            })     

//       }else if(click03[i].getAttribute('id') == "small_mn" ){

//           click03[i].addEventListener('click' , function(){
//               if(small_val03 !== 1){
             
//                     small_val03 = small_val03 - 1
//                     $('#small_val03').attr("value", small_val03) 
      
      
//                      total_s03 = 7000 * small_val03
      
//                      total03 = total_b03 + total_m03 + total_s03 + total_h03
      
//               document.getElementById('total03').innerHTML = total03+' 원'
//       }

//            })     

       
//       }else if(click03[i].getAttribute('id') == "hat_pl" ){
           
//            click03[i].addEventListener('click' , function(){
//                hat_val03 = hat_val03 + 1

//               $('#hat_val03').attr("value", hat_val03) 


//                 total_h03= 2000 * hat_val03

//                 total03= total_b03 + total_m03 + total_s03 + total_h03

//          document.getElementById('total03').innerHTML = total03+' 원'

//             })     

//        }else if(click03[i].getAttribute('id') == "hat_mn" ){
//            click03[i].addEventListener('click' , function(){
//               if(hat_val03 !== 1){
//                 hat_val03 = hat_val03 - 1

//                 $('#hat_val03').attr("value", hat_val03) 
  
  
//                   total_h03= 2000 * hat_val03
  
//                   total03= total_b03 + total_m03 + total_s03 + total_h03
  
//            document.getElementById('total03').innerHTML = total03+' 원'
//               }
//             })     
           
        
//        }
     

//        total_m03 = 45000
  

//       }

// // 옵션추가
//                 function ps03 (){
//                     let op = document.getElementById('se03')
//                     let va = (op.options[op.selectedIndex].value) 
//                  if(va =='big03'){
//                     alert('추가옵션을 선택했습니다')
//                     $('#bigs03').removeClass('hides')
//                        $('#bigs03').show()
//                        $('#big_val03').attr("value", big_val03 ) 
                   
//                        total_b03 = 9000 * big_val03
              
//                        total03= total_b03 + total_m03 + total_s03 + total_h03
  
//                        document.getElementById('total03').innerHTML = total03+' 원'
//                     }else if(va =='small03'){
//                         alert('추가옵션을 선택했습니다')
//                         $('#smalls03').removeClass('hides')
//                            $('#smalls03').show()
//                            $('#small_val03').attr("value", small_val03 ) 
                       
//                            total_s03 = 7000 * small_val03
                  
                     
//                            total03= total_b03 + total_m03 + total_s03 + total_h03
  
//                            document.getElementById('total03').innerHTML = total03+' 원'
//                     }else if(va =='hat03'){
//                         alert('추가옵션을 선택했습니다')
//                         $('#hats03').removeClass('hides')
//                            $('#hats03').show()
//                            $('#hat_val03').attr("value", hat_val03 ) 
                       
//                            total_h03 = 2000 * hat_val03
                  
                     
//                            total03= total_b03 + total_m03 + total_s03 + total_h03
  
//                            document.getElementById('total03').innerHTML = total03+' 원'
//                     }
//             // 닫기 버튼

//                 $('#close_hat03').click(()=>{
//                   $('#hats03').hide()
//                   $('#hats03').addClass('hides')

//                   $('#hat_val03').attr("value", 0) 
                   
//                   total_h03 = 0
         
            
//                   total03= total_b03 + total_m03 + total_s03 + total_h03
  
//                   document.getElementById('total03').innerHTML = total03+' 원'
//                 })
            
//                 $('#close_small03').click(()=>{
//                     $('#smalls03').hide()
//                     $('#smalls03').addClass('hides')
                  
//                     $('#small_val03').attr("value", 0) 
                     
//                     total_s03 = 0
           
              
//                     total03= total_b03 + total_m03 + total_s03 + total_h03
  
//                     document.getElementById('total03').innerHTML = total03+' 원'
//                   })
              
//                   $('#close_big03').click(()=>{
//                     $('#bigs03').hide()
//                     $('#bigs03').addClass('hides')
                  
//                     $('#big_val03').attr("value", 0) 
                     
//                     total_b03 = 0
           
//                     total03= total_b03 + total_m03 + total_s03 + total_h03
  
//                     document.getElementById('total03').innerHTML = total03+' 원'
//                   })
//                 }
      
//         // 모달창 띄우기 없애기
//     $('#modal_close_03').click(function(){
//         $('#modal_03').fadeOut()
//         $('#smalls03').addClass('hides')
//         $('#hats03').hide()
//         $('#smalls03').hide()
//          $('#bigs03').hide()
//         $('#big_val03').attr("value", 0) 
//         $('#small_val03').attr("value", 0) 
//         $('#hat_val03').attr("value", 0) 
//         main_val03 = 1
//         big_val03 = 1
//         small_val03 = 1
//         hat_val03 = 1
//         total_s03 = 0
//         total_b03 = 0
//         total_h03 = 0


//         total03= total_b03 + total_m03 + total_s03 + total_h03
  
//         document.getElementById('total03').innerHTML = total03+' 원'
      
//      })
//     $("#modal_btn_3").click(function(){
//         $('#modal_03').fadeIn()
//     }) 

 

//       // 구메예정금액 짜기
//       const click04 = document.querySelectorAll('.check_click04')
          
//       let main_val04 = document.getElementById("main_val04").value
//       let big_val04 = document.getElementById("big_val04").value
//       let small_val04 = document.getElementById("small_val04").value
//       let hat_val04= document.getElementById("hat_val04").value
    
     
//       main_val04 = Number(main_val04) 
//       big_val04 = Number(big_val04)
//       small_val04= Number(small_val04)
//       hat_val04= Number(hat_val04)
   
//       total_m04 = 0
//       total_b04 = 0
//       total_s04 =  0
//       total_h04 =0
//       for(i = 0 ; i < click04.length ; i++){

//           if( click04[i].getAttribute('id') ==  "main_pl"){
              
//              click04[i].addEventListener('click' ,function(){
//                   main_val04 = main_val04 + 1
//                   $('#main_val04').attr("value", main_val03)

//                  total_m04 = 45000 * main_val04
//                  total04 = total_b04 + total_m04 + total_s04 + total_h04
//         document.getElementById('total04').innerHTML = total04+' 원'
//               })    
//           }else if( click04[i].getAttribute('id') ==  "main_pl"){
              
//             click04[i].addEventListener('click' ,function(){
//                   if(main_val04 !== 1){
//                     main_val04 = main_val04 + 1
//                     $('#main_val04').attr("value", main_val03)
  
//                    total_m04 = 45000 * main_val04
//                    total04 = total_b04 + total_m04 + total_s04 + total_h04
//           document.getElementById('total04').innerHTML = total04+' 원'
//                   }
//                   })           
          
//               }else if(click04[i].getAttribute('id') == "big_pl"  ){
              
//               click04[i].addEventListener('click' , function(){
//                   big_val04 = big_val04 + 1
//                   $('#big_val04').attr("value", big_val04 ) 
              
//                   total_b04 = 9000 * big_val04
//                   total04 = total_b04 + total_m04 + total_s04 + total_h04
//                   document.getElementById('total04').innerHTML = total04+' 원'
              
//           })     
//        }else if(click04[i].getAttribute('id') == "big_pl"  ){
              
//         click04[i].addEventListener('click' , function(){
//               if(big_val03 !== 1){
//                 big_val04 = big_val04 + 1
//                 $('#big_val04').attr("value", big_val04 ) 
            
//                 total_b04 = 9000 * big_val04
       
//                 total04 = total_b04 + total_m04 + total_s04 + total_h04
//                 document.getElementById('total04').innerHTML = total04+' 원'
//               }
//           })
//        }else if(click04[i].getAttribute('id') == "small_pl" ){
           
//           click04[i].addEventListener('click' , function(){
             
//               small_val04 = small_val04 + 1
//               $('#small_val03').attr("value", small_val04) 


//                total_s04 = 7000 * small_val04

//                total04 = total_b04 + total_m04 + total_s04 + total_h04
//                document.getElementById('total04').innerHTML = total04+' 원'
//            })     

//       }else if(click04[i].getAttribute('id') == "small_pl" ){
           
//         click04[i].addEventListener('click' , function(){
//               if(small_val03 !== 1){
             
//                 small_val04 = small_val04 + 1
//                 $('#small_val03').attr("value", small_val04) 
  
  
//                  total_s04 = 7000 * small_val04
//                  total04 = total_b04 + total_m04 + total_s04 + total_h04
//                  document.getElementById('total04').innerHTML = total04+' 원'
//       }

//            })     

       
//       }else if(click04[i].getAttribute('id') == "hat_pl" ){
           
//            click04[i].addEventListener('click' , function(){
//                hat_val04 = hat_val04 + 1

//               $('#hat_val04').attr("value", hat_val04) 


//                 total_h04= 2000 * hat_val04

//                 total04 = total_b04 + total_m04 + total_s04 + total_h04
//                 document.getElementById('total04').innerHTML = total04+' 원'

//             })     

//        }else if(click04[i].getAttribute('id') == "hat_pl" ){
           
//         click04[i].addEventListener('click' , function(){
//               if(hat_val03 !== 1){
//                hat_val04 = hat_val04 + 1

//               $('#hat_val04').attr("value", hat_val04) 


//                 total_h04= 2000 * hat_val04
  
//                 total04 = total_b04 + total_m04 + total_s04 + total_h04
//                 document.getElementById('total04').innerHTML = total04+' 원'
//               }
//             })     
           
        
//        }
     

//        total_m03 = 45000
  

//       }

// // 옵션추가
//                 function ps04 (){
//                     let op = document.getElementById('se03')
//                     let va = (op.options[op.selectedIndex].value) 
//                  if(va =='big04'){
//                     alert('추가옵션을 선택했습니다')
//                     $('#bigs04').removeClass('hides')
//                        $('#bigs04').show()
//                        $('#big_val04').attr("value", big_val04 ) 
                   
//                        total_b04 = 9000 * big_val04
              
//                        total04 = total_b04 + total_m04 + total_s04 + total_h04
//                        document.getElementById('total04').innerHTML = total04+' 원'
//                     }else if(va =='small04'){
//                         alert('추가옵션을 선택했습니다')
//                         $('#smalls04').removeClass('hides')
//                            $('#smalls04').show()
//                            $('#small_val04').attr("value", small_val04 ) 
                       
//                            total_s04 = 7000 * small_val04
                  
                     
//                            total04 = total_b04 + total_m04 + total_s04 + total_h04
//                              document.getElementById('total04').innerHTML = total04+' 원'
//                     }else if(va =='hat04'){
//                         alert('추가옵션을 선택했습니다')
//                         $('#hats04').removeClass('hides')
//                            $('#hats04').show()
//                            $('#hat_val04').attr("value", hat_val04 ) 
                       
//                            total_h04 = 2000 * hat_val04
                  
                     
//                            total04 = total_b04 + total_m04 + total_s04 + total_h04
//                            document.getElementById('total04').innerHTML = total04+' 원'
//                     }
//             // 닫기 버튼

//                 $('#close_hat04').click(()=>{
//                   $('#hats04').hide()
//                   $('#hats04').addClass('hides')

//                   $('#hat_val04').attr("value", 0) 
                   
//                   total_h04 = 0
         
            
                    
//                   total04 = total_b04 + total_m04 + total_s04 + total_h04
//                   document.getElementById('total04').innerHTML = total04+' 원'
//                 })
            
//                 $('#close_small04').click(()=>{
//                     $('#smalls04').hide()
//                     $('#smalls04').addClass('hides')
                  
//                     $('#small_val04').attr("value", 0) 
                     
//                     total_s04 = 0
           
              
             
//                     total04 = total_b04 + total_m04 + total_s04 + total_h04
//                     document.getElementById('total04').innerHTML = total04+' 원'
//                   })
              
//                   $('#close_big04').click(()=>{
//                     $('#bigs04').hide()
//                     $('#bigs04').addClass('hides')
                  
//                     $('#big_val04').attr("value", 0) 
                     
//                     total_b04 = 0
           
             
//                     total04 = total_b04 + total_m04 + total_s04 + total_h04
//                     document.getElementById('total04').innerHTML = total04+' 원'
//                   })
//                 }
      
//         // 모달창 띄우기 없애기
//     $('#modal_close_04').click(function(){
//         $('#modal_04').fadeOut()
//         $('#smalls04').addClass('hides')
//         $('#hats04').hide()
//         $('#smalls04').hide()
//          $('#bigs04').hide()
//         $('#big_val04').attr("value", 0) 
//         $('#small_val04').attr("value", 0) 
//         $('#hat_val04').attr("value", 0) 
//         main_val04 = 1
//         big_val04 = 1
//         small_val04 = 1
//         hat_val04 = 1
//         total_s04 = 0
//         total_b04 = 0
//         total_h04 = 0


//         total04 = total_b04 + total_m04 + total_s04 + total_h04
//         document.getElementById('total04').innerHTML = total04+' 원'
      
//      })
//     $("#modal_btn_4").click(function(){
//         $('#modal_04').fadeIn()
//     }) 

 