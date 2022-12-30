const textInput = document.querySelector("#validation-input");

const succesInput = document.querySelector("#validation-input.valid");

textInput.addEventListener("blur", () => {
  if (textInput.value.length >= 7) {
    return textInput.classList.add("invalid");
  } else {
    return textInput.classList.replace("invalid", "valid");
  }
});
