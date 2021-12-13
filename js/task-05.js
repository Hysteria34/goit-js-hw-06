let greetingsOutputText = document.querySelector('#name-output');
const greetingsInputText = document.querySelector('#name-input');

greetingsInputText.addEventListener("input", (event)=>{
    greetingsOutputText.textContent = event.currentTarget.value;
});
