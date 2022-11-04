const imgList = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

let currentImgIndex = 0;
const lastIndex = imgList.length - 1;

const imgCarousel = document.querySelector(".img_carousel");
imgCarousel.src = imgList[currentImgIndex];

const btnUp = document.getElementById("button_up");
const btnDown = document.getElementById("button_down");

btnUp.addEventListener("click", function(){
    currentImgIndex--;

    if (currentImgIndex < 0){
        currentImgIndex = lastIndex;
    }

    imgCarousel.src = imgList[currentImgIndex];
})

btnDown.addEventListener("click", function(){
    currentImgIndex++;

    if (currentImgIndex > lastIndex){
        currentImgIndex = 0;
    }

    imgCarousel.src = imgList[currentImgIndex];
})