/**Video Slide */
const bakeryVideoList = document.getElementById("daily_bakery_video_list");
const bakeryVideos = bakeryVideoList.querySelectorAll("li").length;
const video = bakeryVideoList.querySelector("video");
const videos = bakeryVideoList.querySelectorAll("video");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const playVideo = document.getElementById("play");
const pauseVideo = document.getElementById("pause");
const videoDots = document.getElementById("video_dots");

let currentVideo = 1;

let IMAGE_WIDTH = video.clientWidth;
window.addEventListener("resize", () => {
  IMAGE_WIDTH = video.clientWidth;
});

function handlePrev() {
  if (currentVideo === 0) {
    currentVideo = bakeryVideos;
  } else {
    currentVideo--;
  }
  bakeryVideoList.style.transition = `ease-in-out 1s`;
  bakeryVideoList.style.transform = `translateX(-${
    IMAGE_WIDTH * (currentVideo - 1)
  }px)`;
}

function handleNext() {
  if (currentVideo >= bakeryVideos) {
    currentVideo = 0;
  }
  bakeryVideoList.style.transition = `ease-in-out 1s`;
  bakeryVideoList.style.transform = `translateX(-${
    IMAGE_WIDTH * currentVideo
  }px)`;
  currentVideo++;
}
/**Video Nav */
const videoNavDots = videoDots.querySelectorAll("a");
videoNavDots.forEach((element) => {
  function handleNav(event) {
    event.preventDefault();
    currentVideo = parseInt(element.text) - 1;
    bakeryVideoList.style.transition = `ease-in-out 1s`;
    bakeryVideoList.style.transform = `translateX(-${
      IMAGE_WIDTH * currentVideo
    }px)`;
  }
  element.addEventListener("click", handleNav);
});

function handlePlay() {
  videos.item([currentVideo - 1]).play();
  pauseVideo.classList.remove("hidden");
}
function handlePause() {
  videos.item([currentVideo - 1]).pause();
}
prev.addEventListener("click", handlePrev);
next.addEventListener("click", handleNext);
playVideo.addEventListener("click", handlePlay);
pauseVideo.addEventListener("click", handlePause);
