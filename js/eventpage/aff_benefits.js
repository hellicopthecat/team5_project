const affBenefits = document.getElementById("aff_benefits_nav");
const affNav = affBenefits.querySelectorAll("li");

const teleBenefit = document.getElementById("tele_benefit");
const cardBenefit = document.getElementById("card_benefit");
const pbBenefit = document.getElementById("pb_benefit");
const giftBenefit = document.getElementById("gift_benefit");

affNav.forEach((each, index) => {
  const handleAffNav = () => {
    if (index === 0) {
      teleBenefit.classList.remove("hidden");
      cardBenefit.classList.add("hidden");
      pbBenefit.classList.add("hidden");
      giftBenefit.classList.add("hidden");
    } else if (index === 1) {
      teleBenefit.classList.add("hidden");
      cardBenefit.classList.remove("hidden");
      pbBenefit.classList.add("hidden");
      giftBenefit.classList.add("hidden");
    } else if (index === 2) {
      teleBenefit.classList.add("hidden");
      cardBenefit.classList.add("hidden");
      pbBenefit.classList.remove("hidden");
      giftBenefit.classList.add("hidden");
    } else if (index === 3) {
      teleBenefit.classList.add("hidden");
      cardBenefit.classList.add("hidden");
      pbBenefit.classList.add("hidden");
      giftBenefit.classList.remove("hidden");
    }
  };
  each.addEventListener("click", handleAffNav);
});
