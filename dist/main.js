const navMenu = document.querySelector(".menu");
const humbergerBtn = document.querySelector(".humb-el");
const header = document.querySelector("[data-header]");
const navLinks = document.querySelectorAll('[data-nav-link]')

humbergerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

navLinks.forEach(item => item.addEventListener('click', () =>
  navMenu.classList.remove('show-menu')
))



const searchIcon = document.querySelector(".serch-icon");
const searchBar = document.querySelector(".search-bar");

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("show-search");
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


// this for create dynamic product slider
let sliderContainer = document.querySelector('.slider-container');
let slider = document.querySelector('#slider .container');
const sliderBtns = document.querySelectorAll('.slider-btn')
const productsArr = [
  { id: 1, imgSrc: '../images/product2.jpg', title: 'مبل کلاسیک و مینیمال ', des: 'صندلی چوبی، یک قطعه مبلمان کلاسیک و زیباست که به عنوان یک عنصر دکوراسیونی محبوب در فضاهای مختلف به کار می‌رود', price: '600,000 تومان' },
  { id: 2, imgSrc: '../images/product3.jpg', title: 'صندلی مینیمال', des: 'صندلی چوبی، یک قطعه مبلمان کلاسیک و زیباست که به عنوان یک عنصر دکوراسیونی محبوب در فضاهای مختلف به کار می‌رود', price: '800,000 تومان' },
  { id: 3, imgSrc: '../images/product4.jpg', title: 'میز و صندلی مینیمال', des: 'صندلی چوبی، یک قطعه مبلمان کلاسیک و زیباست که به عنوان یک عنصر دکوراسیونی محبوب در فضاهای مختلف به کار می‌رود', price: '650,000 تومان' },
  { id: 4, imgSrc: '../images/product5.jpg', title: 'لامپ و چراغ مطالع', des: 'لامپ alex یک قطعه مبلمان کلاسیک و زیباست که به عنوان یک عنصر دکوراسیونی محبوب در فضاهای مختلف به کار می‌رود', price: '768,000 تومان' },
  { id: 5, imgSrc: '../images/product6.jpg', title: 'مبل کلاسیک و مینیمال ', des: 'صندلی چوبی، یک قطعه مبلمان کلاسیک و زیباست که به عنوان یک عنصر دکوراسیونی محبوب در فضاهای مختلف به کار می‌رود', price: '600,000 تومان' },
  { id: 6, imgSrc: '../images/product7.jpg', title: 'مبل کلاسیک و مینیمال ', des: 'صندلی چوبی، یک قطعه مبلمان کلاسیک و زیباست که به عنوان یک عنصر دکوراسیونی محبوب در فضاهای مختلف به کار می‌رود', price: '600,000 تومان' },
  { id: 7, imgSrc: '../images/product8.jpg', title: 'مبل کلاسیک و مینیمال ', des: 'صندلی چوبی، یک قطعه مبلمان کلاسیک و زیباست که به عنوان یک عنصر دکوراسیونی محبوب در فضاهای مختلف به کار می‌رود', price: '600,000 تومان' },
  { id: 8, imgSrc: '../images/product8.jpg', title: 'مبل کلاسیک و مینیمال ', des: 'صندلی چوبی، یک قطعه مبلمان کلاسیک و زیباست که به عنوان یک عنصر دکوراسیونی محبوب در فضاهای مختلف به کار می‌رود', price: '600,000 تومان' },
]

productsArr.forEach(product => {
  sliderContainer.insertAdjacentHTML('afterbegin',
    `
    <div class="product w-[330px]">
    <div class="w-[200px] h-[200px] mx-auto">
      <img
        class="object-cover h-full w-full"
        src="${product.imgSrc}"
        alt=""
      />
    </div>
    <div class="p-5">
      <h3 class="font-bold text-lg mb-2">${product.title}</h3>
      <p class="text-gray text-sm">
        ${product.des}
      </p>
      <div class="flex items-center justify-between mt-7">
        <p class="font-bold text-black cursor-pointer">
        ${product.price}
        </p>
        <div class="flex gap-x-2">
          <div class="w-5 h-5 bg-slate-400 rounded-full"></div>
          <div class="w-5 h-5 bg-yellow-800 rounded-full"></div>
          <div class="w-5 h-5 bg-neutral-400 rounded-full"></div>
        </div>
      </div>
     </div>
    </div>
  </div>
  `
  )
})

sliderBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let product = document.querySelector('.product')
    let productWidth = product.getBoundingClientRect().width + 30;
    sliderContainer.scrollLeft +=
      btn.classList.contains('prev-btn') ? -productWidth : productWidth
  })
})

