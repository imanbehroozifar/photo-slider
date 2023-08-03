const imgArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

const next = document.querySelector('.next-button')
const prev = document.querySelector('.prev-button')
const sliderImg = document.querySelector('.img')
const slider = document.querySelector('.wrapper')
let imgCount = 0;

const nextImage = (e) => {
    imgCount++
    if (imgCount > imgArray.length - 1) {
        imgCount = 0
    }
    sliderImg.setAttribute('src', `${imgArray[imgCount]}.webp`)
    console.log(sliderImg.setAttribute('src', `images/${imgArray[imgCount]}.webp`))
}
const prevImage = (e) => {
    imgCount--
    if (imgCount < 0) {
        imgCount = imgArray.length - 1
    }
    sliderImg.setAttribute('src', `images/${imgArray[imgCount]}.webp`)
    
}
let startSlider = setInterval(nextImage, 3000)
let stopSlider;
slider.addEventListener('mouseenter', () => {
    clearInterval(startSlider)
    clearInterval(stopSlider)
})
slider.addEventListener('mouseleave', () => {
     stopSlider = setInterval(nextImage, 3000)
})

next.addEventListener('click', nextImage)
prev.addEventListener('click', prevImage)