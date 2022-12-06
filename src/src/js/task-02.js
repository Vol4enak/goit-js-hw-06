const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const getEl = document.querySelector("#ingredients");

const newIngredients = ingredients.map(index => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item")
  itemEl.textContent = index;
  return itemEl;
});

getEl.append(...newIngredients);