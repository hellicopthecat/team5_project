// 정책 동의하기 체크 하나만 켜지게
$('.ac').click(function () {
    let asd = $(this).attr('id')
    if (asd == 'ag_ok') {
        $("input[type=radio][name=qur_agreement_ok]").prop('checked', true);
        $("input[type=radio][name=qur_agreement_no]").prop('checked', false);
    } else if (asd == 'ag_no') {
        $("input[type=radio][name=qur_agreement_ok]").prop('checked', false);
        $("input[type=radio][name=qur_agreement_no]").prop('checked', true);
    }
})
// 검사하기
$('.qur_ok').click(() => {

    let name = document
        .getElementById('qur_name')
        .value;
    let name02 = document
        .getElementById('qur_name_02')
        .value;
    let email = document
        .getElementById('qur_email')
        .value;
    let email2 = document
        .getElementById('qur_email_02')
        .value;
    let phone1 = document
        .getElementById('qur_phone_01')
        .value;
    let phone2 = document
        .getElementById('qur_phone_02')
        .value;
    let phone3 = document
        .getElementById('qur_phone_03')
        .value;
    let phone4 = document
        .getElementById('qur_phone_04')
        .value;
    let phone5 = document
        .getElementById('qur_phone_05')
        .value;
    let phone6 = document
        .getElementById('qur_phone_06')
        .value;
    let address = document
        .getElementById('sample6_address')
        .value;
    let date = document
        .getElementById('datepicker')
        .value;

    let detail = document
        .getElementById('qur_detail')
        .value;
    if (name == '') {
        alert('주문자의 이름을 작성해주세요')
    } else if (email == '') {
        alert('이메일을 작성해주세요')
    } else if (email2 == '') {
        alert('이메일을 작성해주세요')
    } else if (phone1 == '') {
        alert('주문자의 핸드폰 번호를 작성해주세요')
    } else if (phone2 == '') {
        alert('주문자의 핸드폰 번호를 작성해주세요')
    } else if (phone3 == '') {
        alert('주문자의 핸드폰 번호를 작성해주세요')
    } else if (name02 == '') {
        alert('배송 받을실분의 이름을 작성해주세요')
    } else if (phone4 == '') {
        alert('배송 받을실분의 핸드폰 번호를 작성해주세요')
    } else if (phone5 == '') {
        alert('배송 받을실분의 핸드폰 번호를 작성해주세요')
    } else if (phone6 == '') {
        alert('배송 받을실분의 핸드폰 번호를 작성해주세요')
    } else if (address == '') {
        alert('주소를 작성해주세요')
    } else if (date == '') {
        alert('배송 희망 날짜를 정해주세요')
    } else {
        alert('결제창으로 이동하겠습니다.')
        window.location = "../../../views/app/delivery/payment.html"
    }
})
// 이메일 자동완성
function qur_email() {

    let email = document.getElementById('qur_email_02')
    let com = document.getElementById("qur_email_change");
    let value = (com.options[com.selectedIndex].value);
    email.setAttribute('value', value)

}
// 다음 API
function sample6_execDaumPostcode() {
    new daum
        .Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분. 각 주소의 노출 규칙에 따라 주소를 조합한다. 내려오는 변수가 값이 없는
                // 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if (data.userSelectedType === 'R') {
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외) 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if (data.buildingName !== '' && data.apartment === 'Y') {
                        extraAddr += (
                            extraAddr !== ''
                                ? ', ' + data.buildingName
                                : data.buildingName
                        );
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if (extraAddr !== '') {
                        extraAddr = ' (' + extraAddr + ')';
                    }

                } else {}

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document
                    .getElementById("sample6_address")
                    .value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document
                    .getElementById("sample6_detailAddress")
                    .focus();
            }
        })
        .open();
}

$(function () {
    $("#datepicker").datepicker();
});
