$('.ac').click(function(){
    let asd = $(this).attr('id')
    if(asd == 'ag_ok'){
        $("input[type=radio][name=qur_agreement_ok]").prop('checked', true);
        $("input[type=radio][name=qur_agreement_no]").prop('checked', false);
    }else if(asd == 'ag_no'){
        $("input[type=radio][name=qur_agreement_ok]").prop('checked', false);
        $("input[type=radio][name=qur_agreement_no]").prop('checked', true);
    }
})
$('.qur_ok').click(()=>{
    let category =document.getElementById('qur_category').value
    let name = document.getElementById('qur_name').value;
    let email = document.getElementById('qur_email').value;
    let email2 = document.getElementById('qur_email_02').value;
    let phone1 = document.getElementById('qur_phone_01').value;
    let phone2 = document.getElementById('qur_phone_02').value;
    let phone3 = document.getElementById('qur_phone_03').value;
    let address = document.getElementById('qur_address').value;
    let title = document.getElementById('qur_title').value;
    let detail = document.getElementById('qur_detail').value;
   if( category == ''){
    alert('문의종류를 선택해주세요')
   }else if(name == ''){
    alert('이름을 작성해주세요')
   }else if (email == ''){
    alert('이메일을 작성해주세요')
   }else if (email2 == ''){
    alert('이메일을 작성해주세요')
   }else if(phone1 == ''){
    alert('핸드폰 번호를 작성해주세요')
   }else if(phone2 == ''){
    alert('핸드폰 번호를 작성해주세요')
   }else if(phone3 == ''){
    alert('핸드폰 번호를 작성해주세요')
   }else if(address == ''){
    alert('주소를 작성해주세요')
   }else if(title == ''){
    alert('제목를 작성해주세요')
   }else if(detail == ''){
    alert('내용을 작성해주세요')
   }else {
    alert('내용이 접수되었습니다')
   }
})  
function qur_email(){
    
    let email = document.getElementById('qur_email_02')
    let com  = document.getElementById("qur_email_change");
    let value = (com.options[com.selectedIndex].value);
            email.setAttribute('value' , value)

        }                
