const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector(".gallery");


const createTurget = function (value) {
  const addEl = document.createElement("li");
  addEl.classList.add("item");
  addEl.insertAdjacentHTML("afterbegin", "<img class=img__item>");
  addEl.firstElementChild.setAttribute("alt", value.alt);
  addEl.firstElementChild.setAttribute("src", value.url);
  console.log(addEl);
  return addEl;
}


galleryEl.append(...images.map(createTurget));


