
// $(function(){
//     $(".view_pics").click(function(){
//         $(".view_pics_dd").removeClass("hidden");
//         $(".view_nutris_dd").addClass("hidden");
//     })
//     // $(".view_pics").click(function(){
//     //     $(".view_pics_dd").show();
//     //     $(".view_nutris_dd").hide();
//     // });

//     $(".view_nutirs").click(function(){
//         $(".view_pics_dd").addClass("hidden");
//         $(".view_nutris_dd").removeClass("hidden");
//     })

//     // $(".view_nutirs").click(function(){
//     //     $(".view_pics_dd").hide();
//     //     $(".view_nutris_dd").show();
//     // });
// })


// 사진으로 보기, 영양정보로 보기  페이지 전환
const viewPics = document.getElementById("view_pics")
const viewNutris = document.getElementById("view_nutris")
const viewPicsD = document.getElementById("view_pics_dd")
const viewNutrisD = document.getElementById("view_nutris_dd")

const handleViewPics = (event)=>{
    // console.log(event.target)
    event.preventDefault(); /* 화면이 새로고침되지 않도록 하는 코드 */
    viewPicsD.classList.remove("hidden")
    viewNutrisD.classList.add("hidden")
}
const handleViewNutris=(event)=>{
    event.preventDefault();
    viewNutrisD.classList.remove("hidden")
    viewPicsD.classList.add("hidden")
}
viewPics.addEventListener("click",handleViewPics)
viewNutris.addEventListener("click",handleViewNutris)


// 상세분류토글박스

$('.selector_tab').click(function(){
    $('.selector_select').slideToggle("fast");

    var arrowImage = $('.selector_tab a').css('background-image');
    if (arrowImage.includes('arrowD.png')) {
        $('.selector_tab a').css('background-image', 'url(../../../img/menu/arrowU.png)');
    } else {
        $('.selector_tab a').css('background-image', 'url(../../../img/menu/arrowD.png)');
    }
});

// HTML 요소 선택
const breadAllCheckbox = document.querySelector('#bread_all');
const otherCheckboxes = document.querySelectorAll('input[type="checkbox"]:not(#bread_all)');

// '모든 빵 보기' 체크박스 초기 상태 설정
breadAllCheckbox.checked = true;

// 이벤트 핸들러 등록
breadAllCheckbox.addEventListener('change', handleBreadAllCheckboxChange);
otherCheckboxes.forEach(checkbox => checkbox.addEventListener('change', handleOtherCheckboxesChange));

// '모든 빵 보기' 체크박스 변경 시 이벤트 처리
function handleBreadAllCheckboxChange() {
  if (breadAllCheckbox.checked) {
    otherCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  } else {
    otherCheckboxes.forEach(checkbox => {
      checkbox.disabled = false;
    });
  }
}

// 다른 체크박스 변경 시 이벤트 처리
function handleOtherCheckboxesChange() {
  if (breadAllCheckbox.checked) {
    breadAllCheckbox.checked = false;
  }
  checkIfAllOtherCheckboxesUnchecked();
  checkIfAnyOtherCheckboxChecked();
}

// 모든 다른 체크박스가 선택 해제되었는지 확인
function checkIfAllOtherCheckboxesUnchecked() {
  const uncheckedCheckboxes = Array.from(otherCheckboxes).filter(checkbox => !checkbox.checked);
  if (uncheckedCheckboxes.length === otherCheckboxes.length - 1) {
    breadAllCheckbox.checked = true;
  }
}

// 다른 체크박스 중 하나라도 선택되었는지 확인
function checkIfAnyOtherCheckboxChecked() {
  const checkedCheckboxes = Array.from(otherCheckboxes).filter(checkbox => checkbox.checked);
  if (checkedCheckboxes.length > 0) {
    breadAllCheckbox.checked = false;
  }
}
