let sliderContainer = document.querySelector('.slider');
const sliderBtns = document.querySelectorAll('.slider-btns');
const product = document.querySelector('.product');
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')


nextBtn.addEventListener('click', () => {
    sliderContainer.scrollLeft += 310
})
prevBtn.addEventListener('click', () => {
    sliderContainer.scrollLeft += -310
})