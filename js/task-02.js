const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulElements = document.querySelector('#ingredients');
for (let i=0; i <= ingredients.length-1; i++){
  const newElemen = document.createElement('li');
  newElemen.textContent = ingredients[i];
  ulElements.appendChild(newElemen); 
}
