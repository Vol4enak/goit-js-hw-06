// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
//     тобто елементів li.item.

// Для кожного элемента li.item у списку ul#categories, знайде і виведе
// в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).

const itemEl = document.querySelectorAll(".item");
const categoriesEl = document.querySelector("#categories");
console.log("Number of categories:", itemEl.length);

itemEl.forEach((element) => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.children.length)
});
