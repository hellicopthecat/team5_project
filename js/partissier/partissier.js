const partissierHeadNav = document.querySelectorAll("#partissier__head-nav li");
const partissierInfo = document.getElementById("partissier__infomation");
const partissierNotice = document.getElementById("partissier__notice");
const partissierLocal = document.getElementById("partissier__location");

partissierHeadNav.forEach((headNav, index) => {
  const handlePartissierNav = () => {
    if (index === 0) {
      partissierInfo.classList.remove("hidden");
      partissierNotice.classList.add("hidden");
      partissierLocal.classList.add("hidden");
    } else if (index === 1) {
      partissierInfo.classList.add("hidden");
      partissierNotice.classList.remove("hidden");
      partissierLocal.classList.add("hidden");
    } else if (index === 2) {
      partissierInfo.classList.add("hidden");
      partissierNotice.classList.add("hidden");
      partissierLocal.classList.remove("hidden");
    }
  };
  headNav.addEventListener("click", handlePartissierNav);
});

const newPartissierNav = document.querySelectorAll("#new__partissier-nav li");
const newPartissierList = document.getElementById("new-partissier__body-list");
const exPartiTable = document.getElementById(
  "experienced-partissier-body-cont"
);
newPartissierNav.forEach((newPartiNav, index) => {
  const handleNewPartiNav = () => {
    if (index === 0) {
      exPartiTable.classList.add("hidden");
      newPartissierList.classList.remove("hidden");
    } else if (index === 1) {
      exPartiTable.classList.remove("hidden");
      newPartissierList.classList.add("hidden");
    }
  };
  newPartiNav.addEventListener("click", handleNewPartiNav);
});
