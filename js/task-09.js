function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");



const changeColor = function () {
  const randColor = getRandomHexColor();
  console.log(randColor);
  const bodyEl = document.querySelector("body")
  bodyEl.style.backgroundColor = randColor;
  spanEl.textContent = randColor;
}



btnEl.addEventListener("click", changeColor);

