$(document).ready(()=>{
    $('#bank02').prop('value' , 'no')
    $('#pay_name').prop('html' , 'no')
    const name = document.getElementById('pay_name').value;
    document.getElementById("result").innerText = name;
})

function check (){

    let check_arr = document.getElementsByName('pay_check')
    let check_all = document.getElementById('pay_check_all')
  
    check_all.addEventListener('click' , ()=>{
        check_arr.forEach(pay_check =>{
            pay_check.checked = check_all.checked
        })
      })  

      check_arr.forEach(pay_check => {
        pay_check.addEventListener('click', ()=>{
            let cnt = 0;

            check_arr.forEach(pay_check => {
                if(pay_check.checked){
                    cnt++
                }
                
            })
            if(cnt == check_arr.length){
                check_all.checked =true
            }else{
                
                check_all.checked =false
            }
        })
      })

    }
    function change() {
        const ac = document.getElementById('pay_c')
        const ae = document.getElementById('pay_e')
        const ag = document.getElementById('pay_g')
      ac.addEventListener('click' ,()=>{
        $('#bank02').prop('value' , 'no')
        console.log(document.getElementById('bank02'))
        $('.pay_se03_wrap').addClass('pay_hide')
        $('.pay_se04_wrap').addClass('pay_hide')
        $('.pay_se05_wrap').addClass('pay_hide')
        $('.pay_se01_wrap').removeClass('pay_hide')
        $('#pay_c').addClass('pay_check')
        $('#pay_e').removeClass('pay_check')
        $('#pay_g').removeClass('pay_check')
    })
    ae.addEventListener('click' , () => {
        $('#bank01').prop('value' , 'no')
        $('#bank02').prop('value' , 'none')
        $('#pay_name').prop('html' , )
        console.log(document.getElementById('bank02'))
        
        $('.pay_se01_wrap').addClass('pay_hide')
        $('.pay_se04_wrap').addClass('pay_hide')
        $('.pay_se03_wrap').removeClass('pay_hide')
        $('.pay_se05_wrap').removeClass('pay_hide')
        $('#pay_e').addClass('pay_check')
        $('#pay_c').removeClass('pay_check')
        $('#pay_g').removeClass('pay_check')
    })
    ag.addEventListener('click', ()=>{
        $('#bank01').prop('value' , 'no')
        $('#bank02').prop('value' , 'no')
        $('.pay_se01_wrap').addClass('pay_hide')
        $('.pay_se03_wrap').addClass('pay_hide')
        $('.pay_se05_wrap').addClass('pay_hide')
        $('.pay_se04_wrap').removeClass('pay_hide')
        $('#pay_g').addClass('pay_check')
        $('#pay_c').removeClass('pay_check')
        $('#pay_e').removeClass('pay_check')
      })
    };
    change()
    function pay_go (){
        var pay_bank  = document.getElementById("pay_bank");
        var pay_bank02  = document.getElementById("pay_bank02");
        const go = document.getElementById('pay_ok')
        const no = document.getElementById('pay_no')
        let name = document.getElementById('pay_name').value
        go.addEventListener('click' , ()=>{
            let check_all = document.getElementById('pay_check_all')
            let bank_check = (pay_bank.options[pay_bank.selectedIndex].value);
            let bank_check02 = (pay_bank02.options[pay_bank02.selectedIndex].value);
            console.log(name)
            if(bank_check == 'none'){
                alert("은행을 선택하세요")
            }
            else if(bank_check02 == 'none'){
                alert("은행을 선택하세요")

            }else if(check_all.checked !== true){
                alert('약관동의해주세요')
                
            }else{
                alert("결제성공")
                document.getElementById('pay_ok').href = "../../../index.html"
            }

        });
        no.addEventListener('click' , ()=>{
           home = confirm('결제를 취소하시겠습니까?')
           if(home){
               document.getElementById('pay_no').href = "../../../index.html"
           }
        });
    }
    pay_go()
    check()

    $('#pay_receipts2').change(()=>{
        if($('#pay_receipts2').is(":checked")){
            console.log(1)
            $('#pay_receipts1').prop('checked' , true)
            $('#pay_receipts2').prop('checked' , false)
            $('#receipt_01').addClass('pay_hide')
            $('#receipt_02').addClass('pay_hide')
            $('#company_01').removeClass('pay_hide')
            $('#company_02').removeClass('pay_hide')
        }
    });
    $('#pay_receipts3').change(()=>{
        if($('#pay_receipts3').is(":checked")){
            console.log(1)
            $('#pay_receipts4').prop('checked' , true)
            $('#pay_receipts3').prop('checked' , false)
            $('#company_01').addClass('pay_hide')
                $('#company_02').addClass('pay_hide')
                $('#receipt_01').removeClass('pay_hide')
                $('#receipt_02').removeClass('pay_hide')
        }
    });