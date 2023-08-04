const menuActiv = document.querySelector(".header-header__menu_activ");
const headerMenu = document.querySelector(".header-header__nav_right_menu");

function toggleMenu() {
  menuActiv.classList.toggle("hidden");
}
headerMenu.addEventListener("click", toggleMenu);

function showCard(cardNumber) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.classList.remove("active"));
  cards[cardNumber - 1].classList.add("active");
}

const rectangleEl = document.querySelector(".header-rectangle");
const rectangleMiniEl = document.querySelector(".header-rectangle__mini");
rectangleEl.addEventListener("mouseover", () => {
  rectangleMiniEl.style.display = "block";
});

rectangleEl.addEventListener("mouseout", () => {
  rectangleMiniEl.style.display = "none";
});

const password1 = document.querySelector(".form__input2");
const password2 = document.querySelector(".form__input3");
password2.addEventListener("input", () => {
  if (password1.value === password2.value) {
    password1.style.border = "2px solid green";
    password2.style.border = "2px solid green";
  } else {
    password1.style.border = "2px solid red";
    password2.style.border = "2px solid red";
  }
});

const stars = document.querySelectorAll(".star");
function setRating(value) {
  stars.forEach((star, index) => {
    if (index < value) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = parseInt(star.getAttribute("data-value"));
    setRating(value);
  });
});
