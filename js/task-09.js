function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

const showChangeColor = () =>{
  document.body.style.background = getRandomHexColor();
};
const showTextColor = () =>{
  textColor.textContent = getRandomHexColor();
};

changeColor.addEventListener('click', showChangeColor);
changeColor.addEventListener('click', showTextColor);