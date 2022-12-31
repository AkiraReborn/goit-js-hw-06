const textInput = document.querySelector("#validation-input");

const succesInput = document.querySelector("#validation-input.valid");

// textInput.addEventListener("blur", () => {
//   if (textInput.value.length === 6) {
//   textInput.classList.add("valid");
//   } else {
//   textInput.classList.add("invalid");
//   }
// });


textInput.addEventListener('blur', () => {
  if (textInput.value.length === 6) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  }
  else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  };
});
