const slideContainer = document.getElementById("slide_cont");
const slide = slideContainer.querySelector("li img");
const lBtn = document.getElementById("lbtn");
const playBtn = document.getElementById("play");
const rBtn = document.getElementById("rbtn");

const adImg = [
  {
    src: "./img/mainpage/main_ad/main_ad_1.jpeg",
    alt: "순금 총 35돈 황금열쇠의 주인공으니 누구?",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_2.png",
    alt: "프랑스 전통 디저트 본연의 맛 그대로! 까눌레의 정석",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_3.jpeg",
    alt: "네이버페이 포인트 혹은 머니로 2만원 이상 결제시 6천원 바로 적립 기간: 4월 17일 월 ~ 5월 7일 일요일까지",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_4.jpeg",
    alt: "T맴버십 T day 최대 30% 할인 또는 적립 1000원당 300원 (최대 한도 2만원, 6천원 혜택) 기간 :5월 8일 월 ~ 5월 12일 금",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_5.jpeg",
    alt: "애플페이 이제 뚜레쥬르에서도 쉽고 안전하고 재빠르게 애플페이",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_6.jpeg",
    alt: "KT 맴버십 VVIP, VIP 고객 생일 혜택. 생일 축하드립니다! 행사기간 2023년 4월 1일 ~ 2023년 12월 31일까지 (생일 당월 1회 한정, 이용 유읫사항 확인 요망)",
  },
  {
    src: "./img/mainpage/main_ad/main_ad_7.jpeg",
    alt: "5월 뚜레쥬의 배달앱 할인 혜택 최대 7원 할인(배달의 민족, 요기요, 땡겨요)",
  },
];

let currentIndex = 1;
function slidecontroller() {
  let slideArray = adImg[currentIndex++];
  if (adImg.length <= currentIndex) {
    currentIndex = 0;
  }
  //   console.log(slideArray);
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("src", slideArray.src);
  img.setAttribute("alt", slideArray.alt);
  li.append(img);
  slideContainer.appendChild(li);
  slideContainer.firstElementChild.remove();
}
setInterval(slidecontroller, 10000);
