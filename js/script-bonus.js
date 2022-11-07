const imgList = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

// *******************
// adds all <img> tags
// *******************

let currentIndex = 0;
const lastIndex = imgList.length - 1;
const imgContainer = document.querySelector(".img_container");
const thumbContainer = document.querySelector(".thumbnail_container");
const btnUp = document.getElementById("button_up");
const btnDown = document.getElementById("button_down");

for (let i = 0; i < imgList.length; i++){
    const currentImg = imgList[i];

    const newImg = document.createElement("img");
    newImg.classList.add("img_carousel");
    newImg.src = currentImg;

    const newThumb = document.createElement("img");
    newThumb.classList.add("img_thumbnail");
    newThumb.src = currentImg;

    if (i === currentIndex){
        newImg.classList.add("visible");
        newThumb.classList.add("visible");
    }

    imgContainer.append(newImg);
    thumbContainer.append(newThumb);
}


//prova funzione
function toggleVisibility(){
    const oldActiveImg = imgContainer.querySelector(".visible");
    const oldActiveThumb = thumbContainer.querySelector(".visible");

    oldActiveImg.classList.remove("visible");
    oldActiveThumb.classList.remove("visible");

    const allImgs = imgContainer.querySelectorAll("img");
    const allThumbs = thumbContainer.querySelectorAll("img");

    const newActiveImg = allImgs[currentIndex];
    const newThumb = allThumbs[currentIndex];

    newActiveImg.classList.add("visible");
    newThumb.classList.add("visible");
}

btnDown.addEventListener("click", function(){
    currentIndex++;
    if (currentIndex > lastIndex){
        currentIndex = 0;
    }

    toggleVisibility();
})

btnUp.addEventListener("click", function(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = lastIndex;
    }

    toggleVisibility();
})