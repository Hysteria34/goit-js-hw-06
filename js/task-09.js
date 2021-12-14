function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.querySelector('body');
const buttonColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

buttonColor.addEventListener('click', changeColor);

function changeColor(event){
  let color = getRandomHexColor();
  bodyElement.style.backgroundColor = color;
  spanColor.textContent = `${color}`;
}