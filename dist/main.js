const navMenu = document.querySelector(".menu");
const humbergerBtn = document.querySelector(".humb-el");
const header = document.querySelector("[data-header]");

humbergerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  console.log(122);
});

const searchIcon = document.querySelector(".serch-icon");
const searchBar = document.querySelector(".search-bar");

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("show-search");
  console.log(12121);
});

// Get all list items with the class 'item'
const listItems = document.querySelectorAll(".nav-item");

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function (event) {
    event.target.classList.toggle("link-active");
  });
}

const categoryItem = document.querySelectorAll(".gategory-item");

for (let i = 0; i < categoryItem.length; i++) {
  categoryItem[i].addEventListener("click", (event) => {
    event.preventDefault();
    event.target.classList.toggle("category-active");
  });
}
// -------------------------------------

const contactLi = document.querySelectorAll(".contact-item");
const contactShow = document.querySelectorAll(".contact-text");

for (let i = 0; i < contactLi.length; i++) {
  contactLi[i].addEventListener("click", function (contactShow) {
    contactShow.target.classList.toggle("contact-show");
    console.log(1212);
  });
}


