const fontSizeInput = document.querySelector("#font-size-control");

const textOfInput = document.querySelector("#text");

fontSizeInput.addEventListener("input", function () {
  const size = fontSizeInput.value;
  textOfInput.style.fontSize = size + "px";
});
