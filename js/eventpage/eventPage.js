const pageList = document.getElementById("pageList");
const li = pageList.querySelectorAll("#pageList li");
const pageImg = pageList.querySelector("img");

for (i = 0; i < li.length; i++) {
  function handleImg(event) {
    event.preventDefault();
  }
  li[i].addEventListener("click", handleImg);
}
