const eventWin = document.getElementById("event_winner");
const winnerList = eventWin.querySelectorAll("li");

winnerList.forEach((each) => {
  function handleClick(event) {
    event.preventDefault();
    const img = each.querySelectorAll(".toggle_slide");

    img.forEach((att) => {
      // console.dir(att);
      if (att.classList.contains("slideup_active")) {
        att.classList.remove("slideup_active");
        att.style.height = "auto";

        const imgHeight = `${att.clientHeight}px`;

        att.style.height = "0px";
        setTimeout(() => {
          att.style.height = imgHeight;
          // att.style.height = "500px";
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
