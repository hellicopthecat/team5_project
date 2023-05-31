const startUpHeaderNav = document.querySelectorAll("#startup-header-nav li");
const startUpIntroTlj = document.getElementById("startup_introduce-tlj");
const startUpPrePare = document.getElementById("startup_prepare");
const startUpRecruitStory = document.getElementById("startup_recruit_story");

startUpHeaderNav.forEach((headerNav, index) => {
  const handleStartUpHeaderNav = () => {
    if (index === 0) {
      startUpIntroTlj.classList.remove("hidden");
      startUpPrePare.classList.add("hidden");
      startUpRecruitStory.classList.add("hidden");
    } else if (index === 1) {
      startUpIntroTlj.classList.add("hidden");
      startUpPrePare.classList.remove("hidden");
      startUpRecruitStory.classList.add("hidden");
    } else if (index === 2) {
      startUpIntroTlj.classList.add("hidden");
      startUpPrePare.classList.add("hidden");
      startUpRecruitStory.classList.remove("hidden");
    }
  };
  headerNav.addEventListener("click", handleStartUpHeaderNav);
});

const startupPrepareNav = document.querySelectorAll("#startup_prepare--nav li");
const prepareProcess = document.getElementById("prepare-process");
const prepareInvestcost = document.getElementById("prepare-investcost");
const prepareLoan = document.getElementById("prepare-loan");
const prepareFaq = document.getElementById("prepare-faq");
const prepareHelp = document.getElementById("prepare-help");

startupPrepareNav.forEach((preparenav, index) => {
  const handlePrepareNav = () => {
    if (index === 0) {
      prepareProcess.classList.remove("hidden");
      prepareInvestcost.classList.add("hidden");
      prepareLoan.classList.add("hidden");
      prepareFaq.classList.add("hidden");
      prepareHelp.classList.add("hidden");
    } else if (index === 1) {
      prepareProcess.classList.add("hidden");
      prepareInvestcost.classList.remove("hidden");
      prepareLoan.classList.add("hidden");
      prepareFaq.classList.add("hidden");
      prepareHelp.classList.add("hidden");
    } else if (index === 2) {
      prepareProcess.classList.add("hidden");
      prepareInvestcost.classList.add("hidden");
      prepareLoan.classList.remove("hidden");
      prepareFaq.classList.add("hidden");
      prepareHelp.classList.add("hidden");
    } else if (index === 3) {
      prepareProcess.classList.add("hidden");
      prepareInvestcost.classList.add("hidden");
      prepareLoan.classList.add("hidden");
      prepareFaq.classList.remove("hidden");
      prepareHelp.classList.add("hidden");
    } else if (index === 4) {
      prepareProcess.classList.add("hidden");
      prepareInvestcost.classList.add("hidden");
      prepareLoan.classList.add("hidden");
      prepareFaq.classList.add("hidden");
      prepareHelp.classList.remove("hidden");
    }
  };
  preparenav.addEventListener("click", handlePrepareNav);
});

const preFaqQue = document.querySelectorAll(".faq_q");
const preFaqAnw = document.querySelectorAll(".faq_a");

let preFaqIndex = null;
preFaqQue.forEach((question, index) => {
  const handlePreFaqQuestion = () => {
    if (preFaqAnw[index].classList.contains("hidden")) {
      if (preFaqIndex !== null) {
        preFaqQue[preFaqIndex].children[2].style.transform = `rotateZ(0deg)`;
        preFaqQue[
          preFaqIndex
        ].children[2].style.transition = `0.4s ease-in-out`;
        preFaqAnw[preFaqIndex].classList.add("hidden");
      }
      preFaqQue[index].children[2].style.transform = `rotateZ(180deg)`;
      preFaqQue[index].children[2].style.transition = `0.4s ease-in-out`;
      preFaqAnw[index].classList.remove("hidden");
      preFaqIndex = index;
    } else {
      preFaqQue[index].children[2].style.transform = `rotateZ(0deg)`;
      preFaqQue[index].children[2].style.transition = `0.4s ease-in-out`;
      preFaqAnw[index].classList.add("hidden");
      preFaqIndex = null;
    }
  };
  question.addEventListener("click", handlePreFaqQuestion);
});

const registModalBtn = document.getElementById("present--regist-btn");
const registModal = document.getElementById("present-regist-modal");
const closeRegistModal = document.getElementById("close--regist-modal");

const handleRegistModal = () => {
  registModal.showModal();
};
registModalBtn.addEventListener("click", handleRegistModal);
const handleRegistModalClose = () => {
  registModal.close();
};
closeRegistModal.addEventListener("click", handleRegistModalClose);

/** introduce tlj 2 depth */
const introduceTljList = startUpIntroTlj.querySelectorAll("ul>li");
const tljLook = document.querySelector(".startup_tlj--look");
const tljStrength = document.querySelector(".startup_tlj--strength");

introduceTljList.forEach((each, index) => {
  function handleIntroduceClick() {
    if (index === 0) {
      tljLook.classList.remove("hidden");
      tljStrength.classList.add("hidden");
    } else if (index === 1) {
      tljLook.classList.add("hidden");
      tljStrength.classList.remove("hidden");
    }
  }
  each.addEventListener("click", handleIntroduceClick);
});
