const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

ingredients.forEach((elem) => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = elem;
  list.before(element);
});