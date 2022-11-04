const imgList = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const imgContainer = document.querySelector(".img_container");

const btnUp = document.getElementById("button_up");
const btnDown = document.getElementById("button_down");

let currentImgIndex = 0;

imgContainer.src = imgList [currentImgIndex];