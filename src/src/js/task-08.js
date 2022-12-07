const form = document.querySelector(".login-form");
const message = "All fields are required but closed!!!";

const getInfoAboutClient = function (event) {
  const infoData = {};
  const evEl = event.currentTarget.elements;

  infoData[form.firstElementChild.textContent.trim()] = evEl.email.value;
  infoData[form.children[1].textContent.trim()] = evEl.password.value;
  console.log(infoData);
};

const handelSubmin = function (event) {
  const evEl = event.currentTarget.elements;
  event.preventDefault();
  if (!evEl.password.value || !evEl.email.value) {
    alert(message);
  }
  if (evEl.password.value && evEl.email.value) {
    getInfoAboutClient(event);
    form.reset();
  }
};

form.addEventListener("submit", handelSubmin);
