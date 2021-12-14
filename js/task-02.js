const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulElements = document.querySelector('#ingredients');
let newUl = ingredients.map((element) =>
  `<li>${element}</li>`
).join("");
ulElements.innerHTML = newUl;