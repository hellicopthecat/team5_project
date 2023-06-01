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
// 이메일 자동완성
function res_email() {
    let email = document.getElementById('email_2')
    let com = document.getElementById("com");
    let value = (com.options[com.selectedIndex].value);
    email.setAttribute('value', value)
}
// 
$('#res_sell').click(() => {
    const name = document
        .getElementById('res_name')
        .value
    const name2 = document
        .getElementById('res_name2')
        .value
    const phone2 = document
        .getElementById('phone_2')
        .value
    const phone3 = document
        .getElementById('phone_3')
        .value
    const phone4 = document
        .getElementById('phone_4')
        .value
    const phone5 = document
        .getElementById('phone_5')
        .value
    const email1 = document
        .getElementById('email_1')
        .value
    const email2 = document
        .getElementById('email_2')
        .value
    const datepicker = document
        .getElementById('datepicker')
        .value
    const address = document
        .getElementById('sample6_address')
        .value
    const address2 = document
        .getElementById('sample6_detailAddress')
        .value
    if (name == '') {
        alert('신청자 이름을 작성해주세요')
    } else if (name2 == '') {
        alert('배송받으실분 이름을 작성해주세요')
    } else if (phone2 == '') {
        alert('신청자 핸드폰 번호를 작성해주세요')

    } else if (phone3 == '') {
        alert('신청자 핸드폰 번호를 작성해주세요')

    } else if (phone4 == '') {
        alert('배송받으실분 핸드폰 번호를 작성해주세요')

    } else if (phone5 == '') {
        alert('배송받으실분 핸드폰 번호를 작성해주세요')

    } else if (email1 == '') {
        alert('이메일을 작성해주세요')

    } else if (email2 == '') {
        alert('이메일을 작성해주세요')
    } else if (datepicker == '') {
        alert('날짜를 정해주세요')
    } else if (address == '') {
        alert('주소를 작성해주세요')
    } else if (address2 == '') {
        alert('상세주소를 작성해주세요')
    } else {
        document
            .getElementById('res_sell')
            .href = "payment.html"

    }
});