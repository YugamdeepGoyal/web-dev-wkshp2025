const b = document.getElementById("main_body");
const mainText = document.querySelector(".main-text");
const tagline = document.querySelector(".tagline");
const color1_btn = document.getElementById("color1-btn");
const color2_btn = document.getElementById("color2-btn");
const color3_btn = document.getElementById("color3-btn");
color1_btn.addEventListener("click", function () {
  b.style.backgroundColor = "#1a1e36";
  mainText.style.color = "#818cf8";
  mainText.style.textShadow = "0 0 15px rgba(129, 140, 248, 0.8)";
  tagline.style.color = "#c3c8fb";
});
color2_btn.addEventListener("click", function () {
  b.style.backgroundColor = "#1a3630";
  mainText.style.color = "#2dd4bf";
  mainText.style.textShadow = "0 0 15px rgba(45, 212, 191, 0.8)";
  tagline.style.color = "#a7f3d0";
});
color3_btn.addEventListener("click", function () {
  b.style.backgroundColor = "#361a20";
  mainText.style.color = "#f472b6";
  mainText.style.textShadow = "0 0 15px rgba(251, 113, 133, 0.8)";
  tagline.style.color = "#fbcfe8";
});
