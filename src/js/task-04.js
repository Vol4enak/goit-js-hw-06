const counter = {
  value: 0,
    decrement(){
        this.value += 1;
    },
    increment() {
        this.value -= 1;
  }
};

const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const numderEl = document.querySelector("#value")

const decrementMet = function () {
    counter.increment();
  numderEl.textContent = counter.value;
};

const incrementMet = function () {
    counter.decrement();
  numderEl.textContent = counter.value;
};

btnDecrementEl.addEventListener("click", decrementMet);
btnIncrementEl.addEventListener("click", incrementMet);

console.log(btnDecrementEl);
console.log(btnIncrementEl);
console.dir(numderEl);