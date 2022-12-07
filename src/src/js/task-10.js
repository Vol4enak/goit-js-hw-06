function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateEl = document.querySelector(["button[data-create]"]);
const btnDestroyEl = document.querySelector(["button[data-destroy]"]);
const blockEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const pixel = "px"



blockEl.style.display = "flex"
blockEl.style.gap = "10px";


const watchNum = function (event) {
  const numOfInput = Number(event.currentTarget.value);
  createDiv(numOfInput);
};

const createDiv = function (num) {
  let element = [];
  let widthNum = 20;
  let heighthNum = 20;

  for (let i = 0; i < num; i++) {
    element.push(document.createElement("div"));
    element[i].classList.add("item");
    element[i].style.backgroundColor = getRandomHexColor();
    element[i].style.width = (widthNum += 10) + pixel;
    element[i].style.height = (heighthNum += 10) + pixel;
  }
  console.log(element);
  return blockEl.append(...element);
};

const destroyDiv = function (dibEl) {
  blockEl.innerHTML = "";
};
inputEl.addEventListener("blur", watchNum);
btnCreateEl.addEventListener("click", createDiv);
btnDestroyEl.addEventListener("click", destroyDiv);
