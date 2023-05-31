
// 사진으로 보기, 영양정보로 보기  페이지 전환
const viewPics = document.getElementById("view_pics")
const viewNutris = document.getElementById("view_nutris")
const viewPicsD = document.getElementById("view_pics_dd")
const viewNutrisD = document.getElementById("view_nutris_dd")

const selectorBox = document.getElementById("selector_tab")

const handleViewPics = (event)=>{
    // console.log(event.target)
    event.preventDefault(); /* 화면이 새로고침되지 않도록 하는 코드 */
    viewPicsD.classList.remove("hidden")
    viewNutrisD.classList.add("hidden")
    selectorBox.classList.remove("hidden") // 베스트 , 신제품 보기 분류 박스 보이기
}
const handleViewNutris=(event)=>{
    event.preventDefault();
    viewNutrisD.classList.remove("hidden")
    viewPicsD.classList.add("hidden")

    selectorBox.classList.add("hidden") // 베스트 , 신제품 보기 분류 박스 숨기기
}

const switchToPicsView = () => {
  viewPics.style.background = "url(../../../img/menu/icon-pics-wh.png) no-repeat left";
  viewPics.style.backgroundColor = "#7e7e7e";
  viewPics.style.color = "#fff";

  viewNutris.style.background = "url(../../../img/menu/icon-ntris.png) no-repeat left";
  viewNutris.style.backgroundColor = "#fff";
  viewNutris.style.color = "#555";
};

const switchToNutrisView = () => {
  viewPics.style.background = "url(../../../img/menu/icon-pics.png) no-repeat left";
  viewPics.style.backgroundColor = "#fff";
  viewPics.style.color = "#555";

  viewNutris.style.background = "url(../../../img/menu/icon-ntris-wh.png) no-repeat left";
  viewNutris.style.backgroundColor = "#7e7e7e";
  viewNutris.style.color = "#fff";
};

viewPics.addEventListener("click",handleViewPics);
viewNutris.addEventListener("click",handleViewNutris);
viewPics.addEventListener("click", switchToPicsView);
viewNutris.addEventListener("click", switchToNutrisView);




// 신제품 모아보기, 베스트 모아보기 토글 / 화살표 변경

$('.selector_tab').click(function(){
  $('.selector_select').slideToggle("fast");

  var arrowImage = $('.selector_tab a').css('background-image');
  if (arrowImage.includes('arrowD.png')) {
      $('.selector_tab a').css('background-image', 'url(../../../img/icons/arrowU.png)');
  } else {
      $('.selector_tab a').css('background-image', 'url(../../../img/icons/arrowD.png)');
  }
});





// 카데고리박스 체크박스

// HTML 요소 선택 - 빵 종류별 체크박스
const viewAllCheckbox = document.querySelector('#view_all');
const otherCheckboxes = document.querySelectorAll('#category_01, #category_02, #category_03, #category_04, #category_05');
const productCategories = document.querySelectorAll('.category_name');
const productItems = document.querySelectorAll('.products_in_category > li');

// HTML 요소 선택 - 신제품 및 베스트 제품 체크박스
const newProductsCheckbox = document.querySelector('#new_products');
const bestProductsCheckbox = document.querySelector('#best_products');


// 초기화 함수 호출
initialize();

// 초기화 함수
function initialize() {
  // '모든 빵 보기' 체크박스 상태 설정
  viewAllCheckbox.checked = true;

  // 모든 제품 보이기
  showAllProducts();
  
  // 이벤트 핸들러 등록 - 빵 종류별 체크박스
  viewAllCheckbox.addEventListener('change', handleViewAllCheckboxChange);
  otherCheckboxes.forEach(checkbox => checkbox.addEventListener('change', handleCheckboxChange));


  // 이벤트 핸들러 등록 - 신제품, 베스트 제품 체크박스
  newProductsCheckbox.addEventListener('change', handleNewProductsCheckboxChange);
  bestProductsCheckbox.addEventListener('change', handleBestProductsCheckboxChange);
}

// '모든 빵 보기' 체크박스 변경 시 이벤트 처리 : handleShowAllCheckboxChange 함수
function handleViewAllCheckboxChange() {
  if (viewAllCheckbox.checked) { // 모든빵보기 체크 상태일 때
    if (newProductsCheckbox.checked && bestProductsCheckbox.checked) {
      showNewAndBestProducts(); // 신제품+베스트만 보여주기
    } else if (!newProductsCheckbox.checked && bestProductsCheckbox.checked) {
      showBestProducts(); // 베스트 제품만 보여주기
    } else if (newProductsCheckbox.checked && !bestProductsCheckbox.checked) {
      showNewProducts();//  신제품만 보여주기
    } else {
      showAllProducts(); // 모든 제품 보여주기
    }
  } else { // 모든빵보기 체크 해제일 때
    if (!Array.from(otherCheckboxes).some(checkbox => checkbox.checked)) {
      hideAllProducts(); // 모든 제품 숨기기
    }
  }
  
  otherCheckboxes.forEach(checkbox => {
    checkbox.checked = false;
  }); // 그리고 다른 체크박스들을 점검한다. 
}



// 다른 체크박스 변경 시 이벤트 처리 : handleCheckboxChange 함수 
function handleCheckboxChange() {
  if (viewAllCheckbox.checked) {
    viewAllCheckbox.checked = false;
  }
  
  // 체크된 카테고리들의 값이 배열로 checkedCategories에 저장된다.
  const checkedCategories = Array.from(otherCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);
  
  if (checkedCategories.length === 0) { //체크된 카테고리가 하나도 없으면
    hideAllProducts(); //모든제품숨기기
  } else {
    filterProducts(checkedCategories);  //체크된 카테고리만 필터링
  }
}

// 모든 제품 보이기 함수 실행 : showAllProducts 함수 
function showAllProducts() {
  productCategories.forEach(category => {
    category.style.display = 'block';
    category.nextElementSibling.style.display = 'block';
  });
  
  productItems.forEach(item => {
    item.style.display = 'block';
  });

  newProductsCheckbox.checked = false; // 신제품 모아보기 체크 해제
  bestProductsCheckbox.checked = false; // 베스트 제품 모아보기 체크 해제
}

// 모든 제품 숨기기 함수 실행 : hideAllProducts 함수 
function hideAllProducts() {
  productCategories.forEach(category => {
    category.style.display = 'none';
    category.nextElementSibling.style.display = 'none';
  });
  
  productItems.forEach(item => {
    item.style.display = 'none';
  });

  newProductsCheckbox.checked = false; // 신제품 모아보기 체크 해제
  bestProductsCheckbox.checked = false; // 베스트 제품 모아보기 체크 해제
}

// 카테고리별 제품 필터링 : filterProducts 함수 
function filterProducts(checkedCategories) {
  productCategories.forEach(category => {
    const categoryName = category.classList[1];
    const categoryItems = category.nextElementSibling.querySelectorAll('li');
    
    if (checkedCategories.includes(categoryName)) {
      category.style.display = 'block';
      category.nextElementSibling.style.display = 'block';
      
      if (categoryItems != null){
        categoryItems.forEach(item => {
        item.style.display = 'block';
        });
      }

    } else {
      category.style.display = 'none';
      category.nextElementSibling.style.display = 'none';

      if (categoryItems != null){
        categoryItems.forEach(item => {
        item.style.display = 'none';
        });
      }
    }
  });
  
  productItems.forEach(item => {
    const category = item.closest('.products_in_category').previousElementSibling;
    const categoryName = category.classList[1];
    
    if (checkedCategories.includes(categoryName)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


function handleNewProductsCheckboxChange(){
  if  (viewAllCheckbox.checked){
    if (newProductsCheckbox.checked && bestProductsCheckbox.checked){
      showNewAndBestProducts();
    } else if (newProductsCheckbox.checked && !bestProductsCheckbox.checked) {
      showNewProducts();
    } else if (!newProductsCheckbox.checked && bestProductsCheckbox.checked) {
      showBestProducts();
    } else {
      showAllProducts();
    }
  } else {
    handleCheckboxChange();
  }
}


function handleBestProductsCheckboxChange(){
  if (viewAllCheckbox.checked){
    if (bestProductsCheckbox.checked && newProductsCheckbox.checked) {
      showNewAndBestProducts();
    } else if (bestProductsCheckbox.checked && !newProductsCheckbox.checked) {
      showBestProducts();
    } else if (!bestProductsCheckbox.checked && newProductsCheckbox.checked) {
      showNewProducts();
    } else {
      showAllProducts();
    }
  } else {
    handleCheckboxChange();
  }
}

// 신제품만 보여주는 함수: showNewProducts 함수
function showNewProducts() {
  productCategories.forEach(category => {
    category.style.display = 'block';
    category.nextElementSibling.style.display = 'block';
  });

  productItems.forEach(item => {
    if (item.classList.contains('new')) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// 베스트 제품만 보여주는 함수: showBestProducts 함수
function showBestProducts() {
  productCategories.forEach(category => {
    category.style.display = 'block';
    category.nextElementSibling.style.display = 'block';
  });

  productItems.forEach(item => {
    if (item.classList.contains('best')) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


// 신제품+베스트제품만 보여주는 함수: showNewAndBestProducts 함수
function showNewAndBestProducts() {
  productCategories.forEach(category => {
    category.style.display = 'block';
    category.nextElementSibling.style.display = 'block';
  });

  productItems.forEach(item => {
    if (item.classList.contains('new') || item.classList.contains('best')) { //신제품과 베스트 둘 다 보여주기 위해서는 &&가 아니라 || 를 써야 하는것이었다!!
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}



// 신제품 모아보기, 베스트 제품 모아보기 클릭 

  // 진용님 코드
  // $('#new_products').click(()=>{
  //   let newProductsChecked = $('#new_products').is(':checked');
  //   let bestProductsChecked = $('#best_products').is(':checked');
  
  //   if(newProductsChecked == true){
  //     $('.new').show()
  //       $('.best').hide()
  //       $('.list').hide()
  //   if(bestProductsChecked === true){
  //       $('.best').show()
  //       $('.list').hide()
       
  //   }else if(bestProductsChecked === false){
  //       $('.best').hide()
  //       $('.list').hide()
  //   } 
  //   }else if (newProductsChecked == false){
  //     if(bestProductsChecked === true){
  //       $('.best').show()
  //       $('.new').hide()
  //   }else {
  //     $('.best').show()
  //       $('.list').show()
  //   }
  //   }
  // })

  // $('#best_products').click(()=>{
  //   let bestProductsChecked = $('#best_products').is(':checked');
  //   let newProductsChecked = $('#new_products').is(':checked')
    
  //   if(bestProductsChecked == true){
  //      $('.best').show()
  //   if(newProductsChecked === true){
  //       $('.new').show()
  //       $('.list').hide()
       
  //   }else if(newProductsChecked === false){
  //       $('.new').hide()
  //       $('.list').hide()
  //   }
  // }else if (bestProductsChecked == false){
  //   if(newProductsChecked === true){
  //       $('.new').show()
  //       $('.best').hide()
  //   }else {
  
  //       $('.best').show()
  //       $('.list').show()
  //   }
  // }
  // })


  // if 문을 간결히 해봄
  // $('#new_products').click(()=>{
  //   let newProductsChecked = $('#new_products').is(':checked');
  //   let bestProductsChecked = $('#best_products').is(':checked');
  
  //   if(newProductsChecked == true){
  //     if(bestProductsChecked == true){
  //       $('.new').show()
  //       $('.best').show()
  //       $('.list').hide()
  //     } else{
  //       $('.new').show()
  //       $('.best').hide()
  //       $('.list').hide()
  //     } 
  //   } else{
  //     if(bestProductsChecked == true){
  //       $('.new').hide()
  //       $('.best').show()
  //       $('.list').hide()
  //     } else{
  //       $('.new').hide()
  //       $('.best').hide()
  //       $('.list').show()
  //     }
  //   }
  // })


  // 다른 방법으로 또 간결히 해봄. 경우의 수 4가지 이므로 코드양은 동일함
  // $('#new_products').click(()=>{
  //   let newProductsChecked = $('#new_products').is(':checked');
  //   let bestProductsChecked = $('#best_products').is(':checked');
  
  //   if(newProductsChecked && bestProductsChecked){
  //       $('.new').show()
  //       $('.best').show()
  //       $('.list').hide()
  //     } else if (newProductsChecked) {
  //       $('.new').show();
  //       $('.best').hide();
  //       $('.list').hide()
  //     } else if (bestProductsChecked) {
  //       $('.new').hide();
  //       $('.best').show();
  //       $('.list').hide();
  //     } else {
  //       $('.new').hide();
  //       $('.best').hide();
  //       $('.list').show();
  //     }
  // })

  //#new_products, #best_products 코드를 합칠 수 있음
  $('#new_products, #best_products').click(()=>{
    let newProductsChecked = $('#new_products').is(':checked');
    let bestProductsChecked = $('#best_products').is(':checked');
  
    if(newProductsChecked == true){
      if(bestProductsChecked == true){
        $('.new').show()
        $('.best').show()
        $('.list').hide()
      } else{
        $('.new').show()
        $('.best').hide()
        $('.list').hide()
      } 
    } else{
      if(bestProductsChecked == true){
        $('.new').hide()
        $('.best').show()
        $('.list').hide()
      } else{
        $('.new').hide()
        $('.best').hide()
        $('.list').show()
      }
    }
  })





  // toggle()함수를 사용하여 코드를 짧게 만듦

  $('#new_products, #best_products').click(() => {
    let newProductsChecked = $('#new_products').is(':checked');
    let bestProductsChecked = $('#best_products').is(':checked');
    
    $('.new').toggle(newProductsChecked);
    $('.best').toggle(bestProductsChecked);
    $('.list').toggle(!(newProductsChecked || bestProductsChecked));
  });
