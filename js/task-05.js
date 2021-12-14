let greetingsOutputText = document.querySelector('#name-output');
const greetingsInputText = document.querySelector('#name-input');

greetingsInputText.addEventListener("input", (event)=>{
    if (greetingsInputText.value === ""){
        greetingsOutputText.textContent = `Anonymous`;
    }
    else {
        greetingsOutputText.textContent = event.currentTarget.value;
    }
    
});
