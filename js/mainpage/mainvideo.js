/**Video Slide */
const bakeryVideoList = document.getElementById("daily_bakery_video_list");
const bakeryVideos = bakeryVideoList.querySelectorAll("li").length;
const video = bakeryVideoList.querySelector("video");
const videos = bakeryVideoList.querySelectorAll("video");
const videoPrev = document.getElementById("video_prev");
const videoNext = document.getElementById("video_next");
const playVideo = document.getElementById("play");
const pauseVideo = document.getElementById("pause");
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
}
function handlePause() {
  videos.item([currentVideo - 1]).pause();
  playVideo.classList.remove("hidden");
  pauseVideo.classList.add("hidden");
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
}
/**Video Nav */
const videoNavDots = videoDots.querySelectorAll("a");
videoNavDots.forEach((element) => {
  function handleNav(event) {
    handlePause();
    event.preventDefault();
    currentVideo = parseInt(element.text);
    bakeryVideoList.style.transition = `ease-in-out 1s`;
    bakeryVideoList.style.transform = `translateX(-${
      VIDEO_WIDTH * (currentVideo - 1)
    }px)`;
  }
  element.addEventListener("click", handleNav);
});
videoPrev.addEventListener("click", handlePrev);
videoNext.addEventListener("click", handleNext);
playVideo.addEventListener("click", handlePlay);
pauseVideo.addEventListener("click", handlePause);
