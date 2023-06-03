/**Video Slide */
const bakeryVideoList = document.getElementById("daily_bakery_video_list");
const bakeryVideos = bakeryVideoList.querySelectorAll("li").length;
const video = bakeryVideoList.querySelector("video");
const videos = bakeryVideoList.querySelectorAll("video");
const videoPrev = document.getElementById("video_prev");
const videoNext = document.getElementById("video_next");
const playVideo = document.getElementById("main_video_play");
const pauseVideo = document.getElementById("main_video_pause");
const videoDots = document.getElementById("video_dots");

let currentVideo = 1;

let VIDEO_WIDTH = video.clientWidth;
window.addEventListener("resize", () => {
  VIDEO_WIDTH = video.clientWidth;
});

function handlePlay() {
  videos.item([currentVideo - 1]).play();
  pauseVideo.classList.remove("hidden");
  playVideo.classList.add("hidden");
  pauseVideo.style.display = "block";
  playVideo.style.display = "none";
}
function handlePause() {
  videos.item([currentVideo - 1]).pause();
  playVideo.classList.remove("hidden");
  pauseVideo.classList.add("hidden");
  pauseVideo.style.display = "none";
  playVideo.style.display = "block";
}

function handleNext() {
  if (currentVideo >= bakeryVideos) {
    handlePause();
    currentVideo = 0;
  } else {
    handlePause();
    currentVideo + 1;
  }
  bakeryVideoList.style.transition = `ease-in-out 1s`;
  bakeryVideoList.style.transform = `translateX(-${
    VIDEO_WIDTH * currentVideo
  }px)`;

  currentVideo++;
  videoChangeRedDot();
}
function handlePrev() {
  if (currentVideo === 0) {
    currentVideo = bakeryVideos;
  } else {
    handlePause();
    currentVideo--;
  }
  if (currentVideo > 0) {
    handlePause();
  }
  bakeryVideoList.style.transition = `ease-in-out 1s`;
  bakeryVideoList.style.transform = `translateX(-${
    VIDEO_WIDTH * (currentVideo - 1)
  }px)`;

  videoChangeRedDot();
}

/**Video Nav */

const videoNavDots = videoDots.querySelectorAll("a");
videoNavDots[0].style.backgroundColor = `tomato`;
videoNavDots.forEach((element, index) => {
  function handleNav(event) {
    handlePause();
    event.preventDefault();
    currentVideo = index;
    bakeryVideoList.style.transition = `ease-in-out 1s`;
    bakeryVideoList.style.transform = `translateX(-${
      VIDEO_WIDTH * currentVideo
    }px)`;
    currentVideo++;
    videoChangeRedDot();
  }
  element.addEventListener("click", handleNav);
});
videoPrev.addEventListener("click", handlePrev);
videoNext.addEventListener("click", handleNext);
playVideo.addEventListener("click", handlePlay);
pauseVideo.addEventListener("click", handlePause);

function videoChangeRedDot() {
  const videoNavDots = videoDots.querySelectorAll("a");
  videoNavDots.forEach((element, index) => {
    if (index === currentVideo) {
      videoNavDots[index - 1].style.backgroundColor = "tomato";
      videoNavDots[index].style.backgroundColor = "white";
    } else if (index === videoNavDots.length - 1 && index + 1 <= currentVideo) {
      videoNavDots[index].style.backgroundColor = `tomato`;
    } else {
      videoNavDots[index].style.backgroundColor = "white";
    }
  });
}

/** mouse enter && leave  event */
function handlePrevMouseEnter() {
  const arrowPrevImg = videoPrev.querySelector("img");
  arrowPrevImg.removeAttribute("src", "./img/icons/left-arrow_col.png");
  arrowPrevImg.setAttribute("src", "./img/icons/left-arrow_white.png");
}
function handleNextMouseEnter() {
  const arrowNextImg = videoNext.querySelector("img");
  arrowNextImg.removeAttribute("src", "./img/icons/right-arrow_col.png");
  arrowNextImg.setAttribute("src", "./img/icons/right-arrow_white.png");
}
videoPrev.addEventListener("mouseenter", handlePrevMouseEnter);
videoNext.addEventListener("mouseenter", handleNextMouseEnter);

function handlePrevMouseLeave() {
  const arrowPrevImg = videoPrev.querySelector("img");
  arrowPrevImg.removeAttribute("src", "./img/icons/left-arrow_white.png");
  arrowPrevImg.setAttribute("src", "./img/icons/left-arrow_col.png");
}
function handleNextMouseLeave() {
  const arrowNextImg = videoNext.querySelector("img");
  arrowNextImg.removeAttribute("src", "./img/icons/right-arrow_white.png");
  arrowNextImg.setAttribute("src", "./img/icons/right-arrow_col.png");
}
videoPrev.addEventListener("mouseleave", handlePrevMouseLeave);
videoNext.addEventListener("mouseleave", handleNextMouseLeave);
