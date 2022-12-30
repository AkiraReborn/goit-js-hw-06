const numberOfList = document.querySelector("#categories").childElementCount;
console.log(`Number of categories: ${numberOfList}`);

const elementList = document.querySelectorAll(".item h2");
elementList.forEach((elem) => {
  console.log(`Category: ${elem.textContent}`);
  console.log(`Elements: ${elem.nextElementSibling.childElementCount}`);
});
