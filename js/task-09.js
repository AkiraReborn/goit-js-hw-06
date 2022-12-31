function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const nameOfCurrentColor = document.querySelector(".color");
console.log(nameOfCurrentColor);

changeColorBtn.addEventListener("click", () => {
  const colorChanger = getRandomHexColor()
  document.body.style.backgroundColor = colorChanger;
  nameOfCurrentColor.textContent = colorChanger;
  console.log(nameOfCurrentColor.textContent);
});