const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");


const change = function (event) {
    outputEl.innerHTML = "";
    outputEl.textContent += event.currentTarget.value; 
}



inputEl.addEventListener("input", change);

