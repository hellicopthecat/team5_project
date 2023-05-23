
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




// 신제품 모아보기, 베스트 모아보기 토글 

$('.selector_tab').click(function(){
  $('.selector_select').slideToggle("fast");

  var arrowImage = $('.selector_tab a').css('background-image');
  if (arrowImage.includes('arrowD.png')) {
      $('.selector_tab a').css('background-image', 'url(../../../img/menu/arrowU.png)');
  } else {
      $('.selector_tab a').css('background-image', 'url(../../../img/menu/arrowD.png)');
  }
});





// 카데고리박스 체크박스

// HTML 요소 선택 - 빵 종류별 체크박스
const breadAllCheckbox = document.querySelector('#bread_all');
const otherCheckboxes = document.querySelectorAll('#loaf_bread, #healthy_bread, #dessert_bread, #pie_pastries, #donut_goroke');
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
  breadAllCheckbox.checked = true;

  // 모든 제품 보이기
  showAllProducts();
  
  // 이벤트 핸들러 등록 - 빵 종류별 체크박스
  breadAllCheckbox.addEventListener('change', handleBreadAllCheckboxChange);
  otherCheckboxes.forEach(checkbox => checkbox.addEventListener('change', handleCheckboxChange));


  // 이벤트 핸들러 등록 - 신제품, 베스트 제품 체크박스
  newProductsCheckbox.addEventListener('change', handleNewProductsCheckboxChange);
  bestProductsCheckbox.addEventListener('change', handleBestProductsCheckboxChange);
}

// '모든 빵 보기' 체크박스 변경 시 이벤트 처리 : handleBreadAllCheckboxChange 함수
function handleBreadAllCheckboxChange() {
  if (breadAllCheckbox.checked) {
    if (newProductsCheckbox.checked && !bestProductsCheckbox.checked) {
      showNewProducts(); // 신제품만 보여주기
    } else if (!newProductsCheckbox.checked && bestProductsCheckbox.checked) {
      showBestProducts(); // 베스트 제품만 보여주기
    } else if (newProductsCheckbox.checked && bestProductsCheckbox.checked) {
      showNewAndBestProducts();// 신제품과 베스트 제품만 보여주기
    } else {
      showAllProducts(); // 모든 제품 보여주기
    }
  } else {
    if (!Array.from(otherCheckboxes).some(checkbox => checkbox.checked)) {
      hideAllProducts(); // 모든 제품 숨기기
    }
  }
  
  otherCheckboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}


// 다른 체크박스 변경 시 이벤트 처리 : handleCheckboxChange 함수 
function handleCheckboxChange() {
  if (breadAllCheckbox.checked) {
    breadAllCheckbox.checked = false;
  }
  
  // 체크된 카테고리들의 값이 배열로 checkedCategories에 저장된다.
  const checkedCategories = Array.from(otherCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);
  
  if (checkedCategories.length === 0) {
    hideAllProducts(); //모든제품숨기기
  } else {
    filterProducts(checkedCategories);
  }

  handleNewProductsCheckboxChange(); // 신제품 체크박스 이벤트 처리 호출
  handleBestProductsCheckboxChange();  // 베스트제품 체크박스 이벤트 처리 호출
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
}

// 카테고리별 제품 필터링 : filterProducts 함수 
function filterProducts(checkedCategories) {
  productCategories.forEach(category => {
    const categoryName = category.classList[1];
    const categoryItems = category.nextElementSibling.querySelectorAll('li');
    
    if (checkedCategories.includes(categoryName)) {
      category.style.display = 'block';
      category.nextElementSibling.style.display = 'block';
      
      categoryItems.forEach(item => {
        item.style.display = 'block';
      });
    } else {
      category.style.display = 'none';
      category.nextElementSibling.style.display = 'none';

      categoryItems.forEach(item => {
        item.style.display = 'none';
      });
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




// '신제품 모아보기' 체크박스 변경 시 이벤트 처리: handleNewProductsCheckboxChange 함수
function handleNewProductsCheckboxChange() {
  if (newProductsCheckbox.checked) {
    if (bestProductsCheckbox.checked) {
      showNewAndBestProducts(); // 신제품과 베스트 제품 보여주기
    } else {
      showNewProducts(); // 신제품만 보여주기
    }
  } else {
    if (breadAllCheckbox.checked) {
      showAllProducts();
    } else if (bestProductsCheckbox.checked) {
      showBestProducts(); // 베스트 제품만 보여주기
    } else {
      hideAllProducts(); // 모든 제품 숨기기
    }
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


// '베스트 제품 모아보기' 체크박스 변경 시 이벤트 처리: handleBestProductsCheckboxChange 함수

function handleBestProductsCheckboxChange() {
  if (bestProductsCheckbox.checked) { // 베스트모아보기가 체크상태일 때
    if (newProductsCheckbox.checked) {  // -신제품모아보기가 체크되면
      showNewAndBestProducts(); // 신제품과 베스트 제품 보여주기
    } else { // --그게 아니면
      showBestProducts(); // 베스트 제품만 보여주기
    }
  } else { //베스트모아보기가 체크해제이면
    if (breadAllCheckbox.checked) { //모든빵보기가 체크상태이면
      showAllProducts(); // 모든빵보여주기
    } else if (newProductsCheckbox.checked) { // 베스트모아보기가 체크해제 + 모든빵보기 체크 + 신제품모아보기 체크
      showNewProducts(); // 신제품만 보여주기
    } else {
      hideAllProducts(); // 모든 제품 숨기기
    }
  }
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


// 신제품과 베스트제품만 보여주는 함수: showNewAndBestProducts 함수
function showNewAndBestProducts() {
  productCategories.forEach(category => {
    category.style.display = 'block';
    category.nextElementSibling.style.display = 'block';
  });

  productItems.forEach(item => {
    if (item.classList.contains('new') && item.classList.contains('best')) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
