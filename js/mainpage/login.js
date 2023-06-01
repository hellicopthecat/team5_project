const userId = document.getElementById("user__id");
const userPassword = document.getElementById("user__pw");
const saveId = document.getElementById("save__id");
const logInBtn = document.getElementById("login__btn");

const handleLoginClick = (event) => {
  let userIdValue = userId.value;
  const userPwValue = userPassword.value;
  if (userIdValue === null || userPwValue === null) {
    alert("아이디 혹은 비밀번호를 입력해주시기 바랍니다.");
    event.preventDefault();
  } else if (userIdValue.includes(" ") || userPwValue.includes(" ")) {
    alert("공백없이 입력해주시기 바랍니다.");
    event.preventDefault();
  }
  if (saveId.checked) {
    localStorage.setItem("USER_ID", JSON.stringify(userIdValue));
  }
};

logInBtn.addEventListener("click", handleLoginClick);
