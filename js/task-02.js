const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const listChanger = ingredients.map(element =>{
  let item = document.createElement("li");
  item.classList.add = 'item';
  item.textContent = element;
  return item;
});

list.append(...listChanger);