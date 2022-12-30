function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const nameOfCurrentColor = document.querySelector(".color");
console.log(nameOfCurrentColor);

changeColorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  nameOfCurrentColor.textContent = getRandomHexColor();
  console.log(nameOfCurrentColor.textContent);
});
