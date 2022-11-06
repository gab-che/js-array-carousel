const imgList = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

let currentIndex = 0;
const lastIndex = imgList.length - 1;

const imgContainer = document.querySelector(".img_container");
const newImg = document.createElement("img");
newImg.classList.add("img_carousel");
newImg.src = imgList[currentIndex];
imgContainer.append(newImg);

const btnUp = document.getElementById("button_up");
const btnDown = document.getElementById("button_down");

btnUp.addEventListener("click", function(){
    currentIndex--;

    if (currentIndex < 0){
        currentIndex = lastIndex;
    }

    newImg.src = imgList[currentIndex];
})

btnDown.addEventListener("click", function(){
    currentIndex++;

    if (currentIndex > lastIndex){
        currentIndex = 0;
    }

    newImg.src = imgList[currentIndex];
})

// altro tentativo - meh

// let currentIndex = 0;
// const lastIndex = imgList.length - 1;
// const imgContainer = document.querySelector(".img_container");

// for (let i = 0; i < imgList.length; i++){
//     const newImg = document.createElement("img");
//     newImg.classList.add("img_carousel");
//     newImg.src = imgList[currentIndex];

//     if (i === 0){
//         newImg.classList.add("visible");
//     }

//     imgContainer.append(newImg);
//     currentIndex++;
// }

// const btnUp = document.getElementById("button_up");
// const btnDown = document.getElementById("button_down");

// btnDown.addEventListener("click", function(){
//     const oldImg = document.querySelector(`.img_container > :nth-child(${lastIndex + 1})`);
//     oldImg.classList.remove("visible");
// })