const quickNavBtn = document.getElementById("quicktoggle");
const quickNavBtnImg = quickNavBtn.querySelector("img");
const quickNavCont = document.querySelector(".mainpage_quick--menu-cont");
const handleQuickNavUp = () => {
  quickNavBtn.classList.add("mainpage_btn");
  quickNavBtnImg.classList.add("mainpage_btn-img");
  quickNavCont.classList.add("mainpage_quick-cont");
};
quickNavBtn.addEventListener("click", handleQuickNavUp);
