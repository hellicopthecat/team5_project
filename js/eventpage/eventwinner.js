const winnerList = document.querySelectorAll("#event_winner li");
const eventWinPagerCont = document.getElementById("eventwinner__pager");
winnerList.forEach((each) => {
  function handleClick() {
    const img = each.querySelectorAll(".toggle_slide");
    img.forEach((att) => {
      if (att.classList.contains("slideup_active")) {
        att.classList.remove("slideup_active");
        att.style.height = "auto";
        const imgHeight = `${att.clientHeight}px`;
        att.style.height = "0px";
        setTimeout(() => {
          att.style.height = imgHeight;
        }, 0);
      } else {
        att.style.height = "0px";
        att.addEventListener(
          "transitionend",
          () => {
            att.classList.add("slideup_active");
          },
          {once: true}
        );
      }
      winnerList.forEach((clicked) => {
        if (clicked !== each) {
          const imgClicked = clicked.querySelectorAll("img");
          imgClicked.forEach((findOne) => {
            if (!findOne.classList.contains("slideup_active")) {
              findOne.classList.add("slideup_active");
              findOne.style.height = "auto";
              findOne.style.height = "0px";
            }
          });
        }
      });
    });
  }
  each.addEventListener("click", handleClick);
});

/** pagenation */
/** 현재 페이지 */
let currentPost = 1;
/** 총 데이터의 개수 */
let TOTALPOST = winnerList.length;
/** 한 페이지 당 나타낼 데이터의 개수*/
const POSTLIMIT = 3;
/** 화면에 나타날 페이지 수들 */
const PAGECOUNT = Math.ceil(TOTALPOST / POSTLIMIT);

function displayPost(startPost, endPost) {
  winnerList.forEach((list, index) => {
    if (index >= startPost && index < endPost) {
      list.style.display = "flex";
    } else {
      list.style.display = "none";
    }
  });
}
function createActiveAbleBtn(btnNum) {
  const btn = document.createElement("button");
  btn.innerText = btnNum;
  if (btnNum === currentPost) {
    btn.classList.add("e__w--pager-active");
  }
  btn.addEventListener("click", () => {
    currentPost = btnNum;
    const startPost = (currentPost - 1) * POSTLIMIT;
    const endPost = startPost + POSTLIMIT;
    displayPost(startPost, endPost);
    const activingBtn =
      eventWinPagerCont.getElementsByClassName("e__w--pager-active");
    for (i = 0; i < activingBtn.length; i++) {
      activingBtn[i].classList.remove("e__w--pager-active");
    }
    btn.classList.add("e__w--pager-active");
  });

  return btn;
}
function createPagerBtn() {
  for (i = 1; i <= PAGECOUNT; i++) {
    const btn = createActiveAbleBtn(i);
    eventWinPagerCont.appendChild(btn);
  }
  const startPost = 0;
  const endPost = POSTLIMIT;
  displayPost(startPost, endPost);
}
createPagerBtn();
