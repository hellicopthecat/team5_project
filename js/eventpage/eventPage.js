const eventWin = document.getElementById("event_winner");
const winnerList = eventWin.querySelectorAll("li");

winnerList.forEach((each) => {
  each.addEventListener("click", function handleClick(event) {
    event.preventDefault();
    const img = each.querySelectorAll("img");

    img.forEach((att) => {
      // console.dir(att);
      if (att.classList.contains("active")) {
        att.classList.remove("active");
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
            att.classList.add("active");
          },
          {once: true}
        );
      }
      winnerList.forEach((clicked) => {
        if (clicked !== each) {
          const imgClicked = clicked.querySelectorAll("img");
          imgClicked.forEach((findOne) => {
            if (!findOne.classList.contains("acitve")) {
              findOne.classList.add("active");
              findOne.style.height = "auto";
              findOne.style.height = "0px";
            }
          });
        }
      });
    });
  });
});
