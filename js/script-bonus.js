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
const btnUp = document.getElementById("button_up");
const btnDown = document.getElementById("button_down");

for (let i = 0; i < imgList.length; i++){
    const currentImg = imgList[i];

    const newImg = document.createElement("img");
    newImg.classList.add("img_carousel");
    newImg.src = currentImg;

    if (i === currentIndex){
        newImg.classList.add("visible");
    }

    imgContainer.append(newImg);
}


//prova funzione
function toggleVisibility(){
    const oldActive = imgContainer.querySelector(".visible");
    oldActive.classList.remove("visible");

    const allImgs = imgContainer.querySelectorAll("img");
    const newActive = allImgs[currentIndex];
    newActive.classList.add("visible");
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