let inputForm = document.querySelector('#validation-input');
const lengthInputEl = inputForm.dataset.length;

inputForm.addEventListener('blur', textInputBlur);

function textInputBlur(){
    if (lengthInputEl == inputForm.value.length){
        inputForm.classList.add('valid');
        inputForm.classList.remove('invalid');
    }
    else{
        inputForm.classList.add('invalid');
        inputForm.classList.remove('valid');
    }
    
}

