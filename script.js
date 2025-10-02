const scoreDisplay = document.getElementById("score");
const heart = document.querySelector(".image-of-heart");
const resetbtn = document.querySelector("#reset-btn");
let score = 0;

heart.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

resetbtn.addEventListener("click", () => {
  scoreDisplay.textContent = "0";
  score = 0;
});
