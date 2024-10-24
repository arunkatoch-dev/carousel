let currentImg = 1;
let image = document.getElementById("slideshowImage");
let rightBtn = document.getElementById("rightBtn");
let leftBtn = document.getElementById("leftBtn");
let currentSlideNumber = document.getElementById("currentSlideNumber");
let radio1 = document.getElementById("radio-1");
let radio2 = document.getElementById("radio-2");
let radio3 = document.getElementById("radio-3");
let radio4 = document.getElementById("radio-4");
let automaticSwitch = document.getElementById("switch");
document.getElementById("radio-1").classList.add("currentRadioBtn");
// Radio Buttons Cliks
const onRadioClick = (currentBtn) => {
  document
    .getElementById(`radio-${currentImg}`)
    .classList.remove("currentRadioBtn");
  currentImg = currentBtn;
  image.src = `./Images/image-${currentImg}.webp`;
  currentSlideNumber.innerHTML = currentImg;
  document
    .getElementById(`radio-${currentImg}`)
    .classList.add("currentRadioBtn");
};
rightBtn.addEventListener("click", () => {
  currentImg++;
  document
    .getElementById(`radio-${currentImg - 1}`)
    .classList.remove("currentRadioBtn");
  if (currentImg > 4) {
    currentImg = 1;
  }
  image.src = `./Images/image-${currentImg}.webp`;
  currentSlideNumber.innerHTML = currentImg;
  document
    .getElementById(`radio-${currentImg}`)
    .classList.add("currentRadioBtn");
});
leftBtn.addEventListener("click", () => {
  currentImg--;
  document
    .getElementById(`radio-${currentImg + 1}`)
    .classList.remove("currentRadioBtn");
  if (currentImg < 1) {
    currentImg = 4;
  }
  image.src = `./Images/image-${currentImg}.webp`;
  currentSlideNumber.innerHTML = currentImg;
  document
    .getElementById(`radio-${currentImg}`)
    .classList.add("currentRadioBtn");
});
let myInterval;
const startSlideshow = () => {
  myInterval = setInterval(() => {
    currentImg++;
    document
      .getElementById(`radio-${currentImg - 1}`)
      .classList.remove("currentRadioBtn");
    if (currentImg > 4) {
      currentImg = 1;
    }
    image.src = `./Images/image-${currentImg}.webp`;
    currentSlideNumber.innerHTML = currentImg;
    document
      .getElementById(`radio-${currentImg}`)
      .classList.add("currentRadioBtn");
  }, 3000);
};
const offSlideShow = () => {
  clearInterval(myInterval);
};
automaticSwitch.addEventListener("click", () => {
  automaticSwitch.value === "off"
    ? (automaticSwitch.value = "on")
    : (automaticSwitch.value = "off");
  if (automaticSwitch.value === "on") {
    startSlideshow();
  }
  if (automaticSwitch.value === "off") {
    offSlideShow();
  }
});
