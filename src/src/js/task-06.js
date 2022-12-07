const inputEl = document.querySelector('#validation-input');
const dataValue = inputEl.getAttribute("data-length");


const validation = function (event) {
    const eventLength = event.currentTarget.value;
    if (eventLength.length === Number(dataValue)) {
        
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
        
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }

}

inputEl.addEventListener("blur", validation);
 