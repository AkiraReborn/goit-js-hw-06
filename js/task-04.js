let counterValue = 0;

let valueDisplay = document.querySelector("#value");

// ------------ Декремент ------------

const minusBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const decrement = () => {
  counterValue -= 1;
  valueDisplay.textContent = counterValue;
};

minusBtn.addEventListener("click", decrement);

// ------------ Инкремент ------------

const plusBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const increment = () => {
  counterValue += 1;
  valueDisplay.textContent = counterValue;
};

plusBtn.addEventListener("click", increment);
