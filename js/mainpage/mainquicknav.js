const quickNavBtn = document.getElementById("quicktoggle");
const quickNavBtnImg = quickNavBtn.querySelector("img");
const quickNavCont = document.querySelector(".mainpage_quick--menu-cont");

function appearQuickMenu() {
  quickNavBtn.classList.toggle("mainpage_btn--disappear");
  quickNavBtnImg.classList.toggle("mainpage_btn-img--disappear");
  quickNavCont.classList.toggle("mainpage_quick-cont--disappear");
  quickNavBtn.classList.toggle("mainpage_btn--appear");
  quickNavBtnImg.classList.toggle("mainpage_btn-img--appear");
  quickNavCont.classList.toggle("mainpage_quick-cont--appear");
}

const handleQuickNavUp = () => {
  appearQuickMenu();
};
quickNavBtn.addEventListener("click", handleQuickNavUp);
