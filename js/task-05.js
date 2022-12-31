const greetingInput = document.querySelector("#name-input");
console.log(greetingInput);

const nameOfUser = document.querySelector("#name-output");
console.log(nameOfUser);

greetingInput.addEventListener("input", (event) => {
  if (greetingInput.value === '') {
    return nameOfUser.textContent = 'Anonymous'
  }
  nameOfUser.textContent = event.currentTarget.value;
});
