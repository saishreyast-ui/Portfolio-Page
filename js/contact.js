const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");

const yesInfo = document.querySelector(".yes-info");
const noInfo = document.querySelector(".no-info");

yesBtn.addEventListener("click", function () {
    yesInfo.classList.add("active");
    noInfo.classList.remove("active");
});

noBtn.addEventListener("click", function () {
    noInfo.classList.add("active");
    yesInfo.classList.remove("active");
});