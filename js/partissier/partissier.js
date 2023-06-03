const partissierHeadNav = document.querySelectorAll("#partissier__head-nav li");
const partissierInfo = document.getElementById("partissier__infomation");
const partissierNotice = document.getElementById("partissier__notice");
const partissierLocal = document.getElementById("partissier__location");
/** body nav */
const newPartissierNav = document.querySelectorAll("#new__partissier-nav li");
const newPartissierList = document.getElementById("new-partissier__body-list");
const exPartiTable = document.getElementById(
  "experienced-partissier-body-cont"
);
/** body 2depth nav */
const fbNoticeBtn = document.getElementById("foodbill-notice--btn");
const fbDetailBtn = document.getElementById("foodbill-detail--btn");
const tcNoticeBtn = document.getElementById("techcenter-notice--btn");
const tcDetailBtn = document.getElementById("techcenter-detail--btn");

const newParitFb = document.getElementById("new-partissier__foodbill");
const newParitTc = document.getElementById("new-partissier__techcenter");
/** body 3depth nav */

const fbNavListCont = document.querySelector(".partissier__foodbill-list");
const fbNavList = document.querySelectorAll("#parti__foodbill-list li");
const techNavCont = document.querySelector(".partissier__tech-list");
const techNavList = document.querySelectorAll("#parti__tech-list li");
const fbillEdu = document.getElementById("fbill-edu");
const fbillRecruit = document.getElementById("fbill-recruit");
const fbillCurriculum = document.getElementById("fbill-curriculum");
const techInfo = document.getElementById("techcenter-info");
const techCurriculum = document.getElementById("techcenter-curriculum");
const techRecruProcess = document.getElementById("techcenter-recruit-process");
const techRecruFaq = document.getElementById("techcenter-recruit-faq");

/** head nav func */
function hideRecruitContents() {
  fbNavListCont.classList.add("hidden");
  techNavCont.classList.add("hidden");
  fbillEdu.classList.add("hidden");
  fbillRecruit.classList.add("hidden");
  fbillCurriculum.classList.add("hidden");
  techInfo.classList.add("hidden");
  techCurriculum.classList.add("hidden");
  techRecruProcess.classList.add("hidden");
  techRecruFaq.classList.add("hidden");
}
function techRecruitInfo() {
  partissierInfo.classList.remove("hidden");
  partissierNotice.classList.add("hidden");
  partissierLocal.classList.add("hidden");
  partissierHeadNav[0].classList.add("parti_mouse_click");
  partissierHeadNav[0].classList.remove("parti_mouse_nonclick");
  partissierHeadNav[1].classList.add("parti_mouse_nonclick");
  partissierHeadNav[1].classList.remove("parti_mouse_click");
  partissierHeadNav[2].classList.add("parti_mouse_nonclick");
  partissierHeadNav[2].classList.remove("parti_mouse_click");
  hideRecruitContents();
}
function techRecruitNotice() {
  partissierInfo.classList.add("hidden");
  partissierNotice.classList.remove("hidden");
  partissierLocal.classList.add("hidden");
  partissierHeadNav[0].classList.add("parti_mouse_nonclick");
  partissierHeadNav[0].classList.remove("parti_mouse_click");
  partissierHeadNav[1].classList.add("parti_mouse_click");
  partissierHeadNav[1].classList.remove("parti_mouse_nonclick");
  partissierHeadNav[2].classList.add("parti_mouse_nonclick");
  partissierHeadNav[2].classList.remove("parti_mouse_click");

  hideRecruitContents();
}
function techRecruitLocal() {
  partissierInfo.classList.add("hidden");
  partissierNotice.classList.add("hidden");
  partissierLocal.classList.remove("hidden");
  partissierHeadNav[0].classList.add("parti_mouse_nonclick");
  partissierHeadNav[0].classList.remove("parti_mouse_click");
  partissierHeadNav[1].classList.add("parti_mouse_nonclick");
  partissierHeadNav[1].classList.remove("parti_mouse_click");
  partissierHeadNav[2].classList.add("parti_mouse_click");
  partissierHeadNav[2].classList.remove("parti_mouse_nonclick");
  hideRecruitContents();
}

/** header nav */
partissierHeadNav.forEach((headNav, index) => {
  const handlePartissierNav = () => {
    if (index === 0) {
      techRecruitInfo();
    } else if (index === 1) {
      techRecruitNotice();
    } else if (index === 2) {
      techRecruitLocal();
    }
  };
  headNav.addEventListener("click", handlePartissierNav);
});

/** body nav */
newPartissierNav.forEach((newPartiNav, index) => {
  const handleNewPartiNav = () => {
    if (index === 0) {
      exPartiTable.classList.add("hidden");
      newPartissierList.classList.remove("hidden");
      hideRecruitContents();
      newPartissierNav[0].style.backgroundColor = `white`;
      newPartissierNav[0].style.color = `black`;
      newPartissierNav[1].style.backgroundColor = `inherit`;
      newPartissierNav[1].style.color = `white`;
    } else if (index === 1) {
      exPartiTable.classList.remove("hidden");
      newPartissierList.classList.add("hidden");
      hideRecruitContents();
      newPartissierNav[1].style.backgroundColor = `white`;
      newPartissierNav[1].style.color = `black`;
      newPartissierNav[0].style.backgroundColor = `inherit`;
      newPartissierNav[0].style.color = `white`;
    }
  };
  newPartiNav.addEventListener("click", handleNewPartiNav);
});

/** body 2depth nav - detail */
const handleFbDetailBtn = () => {
  newParitFb.classList.remove("hidden");
  fbNavListCont.classList.remove("hidden");
  fbillEdu.classList.remove("hidden");
  newParitTc.classList.add("hidden");
  fbillRecruit.classList.add("hidden");
  fbillCurriculum.classList.add("hidden");
};
const handleTcDetailBtn = () => {
  newParitFb.classList.add("hidden");
  newParitTc.classList.remove("hidden");
  techNavCont.classList.remove("hidden");
  techInfo.classList.remove("hidden");
  techCurriculum.classList.add("hidden");
  techRecruProcess.classList.add("hidden");
  techRecruFaq.classList.add("hidden");
};

fbDetailBtn.addEventListener("click", handleFbDetailBtn);
tcDetailBtn.addEventListener("click", handleTcDetailBtn);

/** body 3depth nav */
fbNavList.forEach((navList, index) => {
  const handleFbNavList = () => {
    if (index === 0) {
      fbillEdu.classList.remove("hidden");
      fbillRecruit.classList.add("hidden");
      fbillCurriculum.classList.add("hidden");
    } else if (index === 1) {
      fbillEdu.classList.add("hidden");
      fbillRecruit.classList.remove("hidden");
      fbillCurriculum.classList.add("hidden");
    } else if (index === 2) {
      fbillEdu.classList.add("hidden");
      fbillRecruit.classList.add("hidden");
      fbillCurriculum.classList.remove("hidden");
    }
  };
  navList.addEventListener("click", handleFbNavList);
});
techNavList.forEach((navList, index) => {
  const handleTechNavList = () => {
    if (index === 0) {
      techInfo.classList.remove("hidden");
      techCurriculum.classList.add("hidden");
      techRecruProcess.classList.add("hidden");
      techRecruFaq.classList.add("hidden");
    } else if (index === 1) {
      techInfo.classList.add("hidden");
      techCurriculum.classList.remove("hidden");
      techRecruProcess.classList.add("hidden");
      techRecruFaq.classList.add("hidden");
    } else if (index === 2) {
      techInfo.classList.add("hidden");
      techCurriculum.classList.add("hidden");
      techRecruProcess.classList.remove("hidden");
      techRecruFaq.classList.add("hidden");
    } else if (index === 3) {
      techInfo.classList.add("hidden");
      techCurriculum.classList.add("hidden");
      techRecruProcess.classList.add("hidden");
      techRecruFaq.classList.remove("hidden");
    }
  };
  navList.addEventListener("click", handleTechNavList);
});

/** body 2depth nav - recruit notice */
const fbillEduBtn = document.querySelector("#fbill-edu button");
const handleFbNoticeBtn = () => {
  techRecruitNotice();
};
const handleTcNoticeBtn = () => {
  techRecruitNotice();
};
const handleFbillEduBtn = () => {
  techRecruitNotice();
};
fbNoticeBtn.addEventListener("click", handleFbNoticeBtn);
tcNoticeBtn.addEventListener("click", handleTcNoticeBtn);
fbillEduBtn.addEventListener("click", handleFbillEduBtn);

/** recruit search form */

const recruitSearchBtn = document.getElementById("recruit_search-btn");
const recruitSearch = document.getElementById("recruit_search");
const recruitTable = document.getElementById("recruit-notice--table-cont");
const recruitTableRows = recruitTable.querySelectorAll("tr");

const recruitProcessCont = document.getElementById("recruit_process");
const recruitProcess = document.querySelectorAll("#recruit_process option");
const recruitKindofCont = document.getElementById("recruit_kindof");
const recruitKindof = document.querySelectorAll("#recruit_kindof option");

const recruitLocalList = document.querySelectorAll("#recruit_local option");

const recruitNoticeSpan = document.getElementById("recruit-notice--span");

const handleRecruSearchSubmit = (event) => {
  event.preventDefault();
  const searchValue = recruitSearch.value;
  recruitTableRows.forEach((rows, index, parent) => {
    const localName = parent[index].children[2].innerText;
    const processName = parent[index].children[5].innerText;
    let hiddenLength = recruitTable.querySelectorAll(".hidden").length;
    if (localName !== searchValue) {
      parent[index].classList.add("hidden");
      parent[0].classList.remove("hidden");
      recruitNoticeSpan.innerText = Math.ceil((7 - hiddenLength) / 2);
      if (searchValue === "") {
        parent[index].classList.remove("hidden");
        hiddenLength = 7;
        recruitNoticeSpan.innerText = hiddenLength;
      }
    }
    // else if (recruitProcess[0].value === "1" || searchValue === "") {
    //   parent[index].classList.remove("hidden");
    //   hiddenLength = 7;
    //   recruitNoticeSpan.innerText = hiddenLength;
    // }
    // else if (
    //   (recruitProcess[1].value === "2" &&
    //     processName !== "접수중" &&
    //     searchValue === "") ||
    //   (searchValue === "접수중" && processName !== "접수중")
    // ) {
    //   parent[index].classList.add("hidden");
    //   parent[0].classList.remove("hidden");
    //   recruitNoticeSpan.innerText = Math.ceil((7 - hiddenLength) / 2);
    // } else if (
    //   (recruitProcess[2].value === "3" && processName !== "접수마감") ||
    //   searchValue === "접수마감"
    // ) {
    //   parent[index].classList.add("hidden");
    //   parent[0].classList.remove("hidden");
    //   recruitNoticeSpan.innerText = Math.ceil((7 - hiddenLength) / 2);
    // }
    else {
      parent[index].classList.remove("hidden");
      parent[0].classList.remove("hidden");
    }
  });
};
recruitSearchBtn.addEventListener("click", handleRecruSearchSubmit);

const handleLocalshow = () => {
  if (recruitKindofCont.value === "2") {
    recruitLocalList.forEach((option) => {
      if (option.value === "1" || option.value === "") {
        option.classList.remove("hidden");
      } else {
        option.classList.add("hidden");
      }
    });
  } else if (recruitKindofCont.value === "3") {
    recruitLocalList.forEach((option) => {
      if (option.value !== "1" || option.value === "") {
        option.classList.remove("hidden");
      } else {
        option.classList.add("hidden");
      }
    });
  } else {
    recruitLocalList.forEach((option) => {
      option.classList.add("hidden");
    });
  }
};
recruitKindofCont.addEventListener("change", handleLocalshow);
