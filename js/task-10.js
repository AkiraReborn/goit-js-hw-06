function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");

const createBtn = document.querySelector("[data-create]");

const destroyBtn = document.querySelector("[data-destroy]");

const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let width = 30;
let height = 30;

function createBoxes() {
  let amount = input.value;

  boxes.insertAdjacentHTML("afterbegin", "<div class = 'createdBox'></div>");
  const firstBox = document.querySelector(".createdBox");
  firstBox.style.width = "30px";
  firstBox.style.height = "30px";
  firstBox.style.backgroundColor = getRandomHexColor();

  for (let i = 1; i < amount; i += 1) {
    if (i > amount) {
      break;
    }
    boxes.insertAdjacentHTML("afterbegin", "<div class = 'createdBox'></div>");

    const addBox = document.querySelector(".createdBox");

    width += 10;
    height += 10;

    addBox.style.width = width + "px";
    addBox.style.height = height + "px";
    addBox.style.backgroundColor = getRandomHexColor();
  }
  return;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.reset();
}
