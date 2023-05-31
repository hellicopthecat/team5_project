/** customer page nav */
const customerNavCont = document.getElementById("customer_page-nav--cont");
const customerNav = customerNavCont.querySelectorAll("li");
const faqWarp = document.querySelector(".faq__wrap");
const onlineCounsel = document.querySelector(".online-counsel__wrap");
const onlineCounselResult = document.querySelector(
  ".online__counsel-result_wrap"
);
/** faq nav */
const faqNavCont = document.getElementById("faq__nav-cont");
const faqNav = faqNavCont.querySelectorAll("li");
const product = document.querySelectorAll(".product");
const newRecruit = document.querySelectorAll(".new-recruit");
const bakerTrain = document.querySelectorAll(".baker-train");
const beneStore = document.querySelectorAll(".benefit-store");
const customMember = document.querySelectorAll(".customer-membership");
/** faq to see answer*/
const faqBtns = document.querySelectorAll("#faq__table-list li button");
const faqAnswer = document.querySelectorAll(".a");

/** faq span num */
const faqSpanNum = document.getElementById("faq__num");
const faqSpanTitle = document.getElementById("faq__table-title");
const faqListCount = document.querySelectorAll(".q");

/** variable */
let activeIndex = null;

/** customer page nav */
customerNav.forEach((nav, index) => {
  const handelCustomerNav = () => {
    const DURATION = 800;

    if (index === 0) {
      onlineCounsel.classList.add("hidden");
      onlineCounselResult.classList.add("hidden");
      faqWarp.classList.toggle("hidden");
      faqWarp.animate([{opacity: 0}, {opacity: 1}], {duration: DURATION});
    } else if (index === 1) {
      faqWarp.classList.add("hidden");
      onlineCounselResult.classList.add("hidden");
      onlineCounsel.classList.toggle("hidden");
      onlineCounsel.animate([{opacity: 0}, {opacity: 1}], {duration: DURATION});
    } else if (index === 2) {
      faqWarp.classList.add("hidden");
      onlineCounsel.classList.add("hidden");
      onlineCounselResult.classList.toggle("hidden");
      onlineCounselResult.animate([{opacity: 0}, {opacity: 1}], {
        duration: DURATION,
      });
    }
  };
  nav.addEventListener("click", handelCustomerNav);
});

function allFaq() {
  product.forEach((each) => {
    each.classList.remove("hidden");
  });
  newRecruit.forEach((each) => {
    each.classList.remove("hidden");
  });
  bakerTrain.forEach((each) => {
    each.classList.remove("hidden");
  });
  beneStore.forEach((each) => {
    each.classList.remove("hidden");
  });
  customMember.forEach((each) => {
    each.classList.remove("hidden");
  });
  faqSpanTitle.innerText = "FAQ";
  faqSpanNum.innerText = faqListCount.length;
}
function customMemberFaq() {
  product.forEach((each) => {
    each.classList.add("hidden");
  });
  newRecruit.forEach((each) => {
    each.classList.add("hidden");
  });
  bakerTrain.forEach((each) => {
    each.classList.add("hidden");
  });
  beneStore.forEach((each) => {
    each.classList.add("hidden");
  });
  customMember.forEach((each) => {
    each.classList.remove("hidden");
  });
  faqSpanTitle.innerText = "멤버쉽 FAQ";
  faqSpanNum.innerText = customMember.length;
}
function productFaq() {
  product.forEach((each) => {
    each.classList.remove("hidden");
  });
  newRecruit.forEach((each) => {
    each.classList.add("hidden");
  });
  bakerTrain.forEach((each) => {
    each.classList.add("hidden");
  });
  beneStore.forEach((each) => {
    each.classList.add("hidden");
  });
  customMember.forEach((each) => {
    each.classList.add("hidden");
  });
  faqSpanTitle.innerText = "제품 FAQ";
  faqSpanNum.innerText = product.length;
}
function beneStoreFaq() {
  product.forEach((each) => {
    each.classList.add("hidden");
  });
  newRecruit.forEach((each) => {
    each.classList.add("hidden");
  });
  bakerTrain.forEach((each) => {
    each.classList.add("hidden");
  });
  beneStore.forEach((each) => {
    each.classList.remove("hidden");
  });
  customMember.forEach((each) => {
    each.classList.add("hidden");
  });
  faqSpanTitle.innerText = "제휴/할인 가맹점 개설 FAQ";
  faqSpanNum.innerText = beneStore.length;
}
function bakerTrainFaq() {
  product.forEach((each) => {
    each.classList.add("hidden");
  });
  newRecruit.forEach((each) => {
    each.classList.add("hidden");
  });
  bakerTrain.forEach((each) => {
    each.classList.remove("hidden");
  });
  beneStore.forEach((each) => {
    each.classList.add("hidden");
  });
  customMember.forEach((each) => {
    each.classList.add("hidden");
  });
  faqSpanTitle.innerText = "제빵훈련원 FAQ";
  faqSpanNum.innerText = bakerTrain.length;
}
function newRecruitFaq() {
  product.forEach((each) => {
    each.classList.add("hidden");
  });
  newRecruit.forEach((each) => {
    each.classList.remove("hidden");
  });
  bakerTrain.forEach((each) => {
    each.classList.add("hidden");
  });
  beneStore.forEach((each) => {
    each.classList.add("hidden");
  });
  customMember.forEach((each) => {
    each.classList.add("hidden");
  });
  faqSpanTitle.innerText = "뚜레쥬르 채용 FAQ";
  faqSpanNum.innerText = newRecruit.length;
}
/** faq nav */
faqNav.forEach((navBtn, index) => {
  const handleFaqNav = () => {
    if (index === 0) {
      allFaq();
    } else if (index === 1) {
      customMemberFaq();
    } else if (index === 2) {
      productFaq();
    } else if (index === 3) {
      beneStoreFaq();
    } else if (index === 4) {
      bakerTrainFaq();
    } else if (index === 5) {
      newRecruitFaq();
    }
    if (activeIndex !== null) {
      faqBtns[activeIndex].style.transition = `0.5s ease-in-out`;
      faqBtns[activeIndex].style.transform = `rotateX(${"0deg"})`;
      faqAnswer[activeIndex].classList.add("hidden");
    }
  };
  navBtn.addEventListener("click", handleFaqNav);
});

/** faq to see answer */
faqBtns.forEach((btn, index) => {
  const handleFaqBtn = () => {
    if (faqAnswer[index].classList.contains("hidden")) {
      if (activeIndex !== null) {
        faqBtns[activeIndex].style.transition = `0.5s ease-in-out`;
        faqBtns[activeIndex].style.transform = `rotateX(${"0deg"})`;
        faqAnswer[activeIndex].classList.add("hidden");
      }
      btn.style.transition = `0.5s ease-in-out`;
      btn.style.transform = `rotateX(${"180deg"})`;
      faqAnswer[index].classList.remove("hidden");
      activeIndex = index;
    } else {
      btn.style.transition = `0.5s ease-in-out`;
      btn.style.transform = `rotateX(${"0deg"})`;
      faqAnswer[index].classList.add("hidden");
      activeIndex = null;
    }
  };

  btn.addEventListener("click", handleFaqBtn);
});

/** faq search */
const faqSearchInput = document.getElementById("faq__search_input");
const faqSearchSubmit = document.getElementById("faq__search_submit");

const handleFaqSearch = (event) => {
  event.preventDefault();
  const searchValue = faqSearchInput.value;

  if (searchValue === "") {
    allFaq();
  } else if (searchValue === "맴버쉽" || searchValue === "멤버쉽") {
    customMemberFaq();
  } else if (searchValue === "제품") {
    productFaq();
  } else if (
    searchValue === "제휴" ||
    searchValue === "할인" ||
    searchValue === "가맹점"
  ) {
    beneStoreFaq();
  } else if (searchValue === "제빵" || searchValue === "훈련원") {
    bakerTrainFaq();
  } else if (searchValue === "채용" || searchValue === "뚜레쥬르") {
    newRecruitFaq();
  }
};
faqSearchSubmit.addEventListener("click", handleFaqSearch);
