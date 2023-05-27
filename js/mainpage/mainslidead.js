/**AD Slide */
const slideCont = document.getElementById("slide_cont");
const slide = slideCont.querySelectorAll("li");
const adPlayBtn = document.getElementById("main_play_btn");
const adPauseBtn = document.getElementById("main_pause_btn");
const btnDotCont = document.getElementById("mainpage__btn_dot");
const btnDots = document.querySelectorAll("#mainpage__btn_dot button");

/**슬라이드 위치 */
let currentIndex = 0;
/**자동슬라이드 동작 */
const slideMainadController = () => {
  const SLIDEIMGSIZE = slideCont.querySelector("li img").clientWidth;
  btnDots[0].style.backgroundColor = "tomato";
  if (slide.length <= currentIndex) {
    currentIndex = 0;
  } else {
    null;
  }
  slideCont.style.transform = `translateX(-${SLIDEIMGSIZE * currentIndex}px)`;
  slideCont.style.transition = `ease-in-out 0.7s`;

  currentIndex++;
};
const sliderMotion = setInterval(slideMainadController, 3000);

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
  setInterval(slideMainadController, 3000);
};
adPlayBtn.addEventListener("click", handleMainAdpause);
adPauseBtn.addEventListener("click", handleMainAdPlay);

/**버튼 누를시 동작 */
const clickSlideMotion = (num) => {
  slideCont.style.transform = `translateX(-${SLIDEIMGSIZE * num}px)`;
  slideCont.style.transition = `ease-in-out 0.7s`;
};

btnDots.forEach((eachBtn, index) => {
  const handleMainAdSelect = () => {
    if (target === btnDots[index]) {
      currentIndex = index;
      trasitionMainAdDot();
      clickSlideMotion(index);
      return handleMainAdpause();
    }
  };
  eachBtn.addEventListener("click", handleMainAdSelect);
});

function trasitionMainAdDot() {
  btnDots.forEach((eachDots, index) => {
    if (index !== currentIndex) {
      btnDots[index].style.backgroundColor = "#d7d7d7";
    } else if (index === currentIndex) {
      btnDots[index].style.backgroundColor = " tomato";
    }
    // else if (clickSlideMotion) {
    //   btnDots[currentIndex - 1].style.backgroundColor = "#d7d7d7";
    //   btnDots[currentIndex].style.backgroundColor = " tomato";
    // }
  });
}
