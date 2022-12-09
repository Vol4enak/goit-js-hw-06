const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const outText = outputEl.textContent;

const change = function (event) {
    if (event.currentTarget.value === "") {
        return outputEl.textContent = outText;
    }
    outputEl.innerHTML = "";
    outputEl.textContent = event.currentTarget.value; 
}



inputEl.addEventListener("input", change);

