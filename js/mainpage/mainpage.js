/**AD Slide */
const slideCont = document.getElementById("slide_cont");
const slide = slideCont.querySelectorAll("li");
const adPlayBtn = document.getElementById("main_play_btn");
const adPauseBtn = document.getElementById("main_pause_btn");
const btnDotCont = document.getElementById("mainpage__btn_dot");
const btnDots = document.querySelectorAll("#mainpage__btn_dot button");

/**메뉴 정보 Array */
const adImg = [
  {
    src: "./img/mainpage/main_ad/main_ad_1.jpeg",
    alt: "순금 총 35돈 황금열쇠의 주인공으니 누구?",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_2.png",
    alt: "프랑스 전통 디저트 본연의 맛 그대로! 까눌레의 정석",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_3.jpeg",
    alt: "네이버페이 포인트 혹은 머니로 2만원 이상 결제시 6천원 바로 적립 기간: 4월 17일 월 ~ 5월 7일 일요일까지",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_4.jpeg",
    alt: "T맴버십 T day 최대 30% 할인 또는 적립 1000원당 300원 (최대 한도 2만원, 6천원 혜택) 기간 :5월 8일 월 ~ 5월 12일 금",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_5.jpeg",
    alt: "애플페이 이제 뚜레쥬르에서도 쉽고 안전하고 재빠르게 애플페이",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_6.jpeg",
    alt: "KT 맴버십 VVIP, VIP 고객 생일 혜택. 생일 축하드립니다! 행사기간 2023년 4월 1일 ~ 2023년 12월 31일까지 (생일 당월 1회 한정, 이용 유읫사항 확인 요망)",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_7.jpeg",
    alt: "5월 뚜레쥬의 배달앱 할인 혜택 최대 7원 할인(배달의 민족, 요기요, 땡겨요)",
  },
];
/**슬라이드 위치 */
let currentIndex = 0;
btnDots[6].style.backgroundColor = "tomato";
/**자동슬라이드 동작 */
const slideMainadController = () => {
  let slideArray = adImg[currentIndex++];
  adImg.length <= currentIndex ? (currentIndex = 0) : null;
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("src", slideArray.src);
  img.setAttribute("alt", slideArray.alt);
  li.append(img);
  const newLi = slideCont.appendChild(li);
  if (newLi) {
    newLi.classList.add("newLi");
    newLi.animate(
      [
        {left: "50%", transform: "translateX(10vw)", easing: "ease-in"},
        {left: "0%", transform: "translateX(0vw)", easing: "ease-out"},
      ],
      700
    );
  }
  trasitionMainAdDot();
  const slideNum = slideCont.children;
  // console.log(slideNum);
  if (slideNum.length > 9) {
    slideNum[7].remove();
    slideNum[8].remove();
  }
};
const sliderMotion = setInterval(slideMainadController, 4000);

/** main ad play controll */
const handleMainAdpause = () => {
  adPlayBtn.classList.add("hidden");
  adPauseBtn.classList.remove("hidden");
  clearInterval(sliderMotion);
};
const handleMainAdPlay = () => {
  adPlayBtn.classList.remove("hidden");
  adPauseBtn.classList.add("hidden");
  slide.forEach((element) => {
    element.style.removeProperty("z-index");
  });
  setInterval(slideMainadController, 4000);
};
adPlayBtn.addEventListener("click", handleMainAdpause);
adPauseBtn.addEventListener("click", handleMainAdPlay);

/**버튼 누를시 동작 */
const clickSlideMotion = (num) => {
  slide.forEach((element) => {
    element.style.removeProperty("z-index");
  });

  slide[num].style.zIndex = 1;
  slide[num].animate(
    [
      {left: "50%", transform: "translateX(10vw)", easing: "ease-in"},
      {left: "0%", transform: "translateX(0vw)", easing: "ease-out"},
    ],
    700
  );
  setTimeout(trasitionMainAdDot(), 0);
};

btnDots.forEach((element, index) => {
  const handleMainAdSelect = (event) => {
    const target = event.target;
    if (target === btnDots[index]) {
      currentIndex = index;
      trasitionMainAdDot();
      clickSlideMotion(index);
      return handleMainAdpause();
    }
  };
  element.addEventListener("click", handleMainAdSelect);
});

function trasitionMainAdDot() {
  btnDots.forEach((eachDots, index) => {
    if (index !== currentIndex) {
      btnDots[index].style.backgroundColor = "#d7d7d7";
    } else if (index === currentIndex) {
      btnDots[index].style.backgroundColor = " tomato";
    }
    // if (handleMainAdpause) {
    //   setTimeout(slideMainadController, 0);
    //   currentIndex = index;
    //   btnDots[currentIndex].style.backgroundColor = " tomato";
    // }
    // if (handleMainAdPlay) {
    //   setInterval(slideMainadController, 4000);
    //   currentIndex = index;
    //   btnDots[currentIndex].style.backgroundColor = " tomato";
    // }
  });
}
