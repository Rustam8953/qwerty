const sliderWindow = document.getElementById('header-slider-window');


const sliderItems = [
    {
        id: 1,
        imgSrc: 'slider-1.png'
    },
    {
        id: 2,
        imgSrc: 'slider-2.png'
    }
]

sliderItems.forEach((item) => {
    const sliderHTML = `
    <span class="header__box-slider-display-item" data-id="${item.id}">
        <div class="header__box-slider-display-item-img" style="background-image: url('./img/bcg-img/slider/${item.imgSrc}');"></div>
    </span>`;

    sliderWindow.insertAdjacentHTML('beforeend', sliderHTML);
})

const windowSlide = document.querySelectorAll('.header__box-slider-display span')

let currentSlider = 0;

console.log(windowSlide.length)

slider()

function slider() {
    for(let i = 0; i < windowSlide.length; i++) {
        windowSlide[i].classList.add('opacity');
    };
    windowSlide[currentSlider].classList.remove('opacity');
}

function nextBtn() {
    if(currentSlider + 1 == windowSlide.length) {
        currentSlider = 0;
    } else {
        currentSlider++;
    }
    slider()
}

function prevBtn() {
    if(currentSlider - 1 == -1) {
        currentSlider = windowSlide.length - 1;
    }else {
        currentSlider--;
    }
    slider()
}

setInterval(nextBtn, 6000);