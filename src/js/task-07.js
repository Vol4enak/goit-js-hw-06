const controlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const changeSize = function (event) {
    textEl.style.fontSize = event.currentTarget.value + "px";

}
controlEl.addEventListener("input", changeSize)