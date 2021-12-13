let fontSizeController = document.querySelector('#font-size-control');
let spanText = document.querySelector('#text');

fontSizeController.addEventListener('input', onRangeChange); 

function onRangeChange(event){
    const {value} = event.currentTarget; 
    spanText.style.fontSize = `${value}px`;
}