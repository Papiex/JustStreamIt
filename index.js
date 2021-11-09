// 2images.js


// Slider
let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
let i = 0; // Image actuelle

function prev(carousel){
    if(i <= 0) i = images.length;
        i--;
        return setImgPrev(carousel);
}

function next(carousel){
    if(i >= images.length-1) i = -1;
        i++;
        return setImgNext(carousel);
}

function setImgNext(carousel){
    let sliderImage1 = document.querySelector("."+ carousel + " img.cover1");
    let sliderImage2 = document.querySelector("."+ carousel + " img.cover2");
    let sliderImage3 = document.querySelector("."+ carousel + " img.cover3");
    let sliderImage4 = document.querySelector("."+ carousel + " img.cover4");
    if(i == 4){
        // transition
        return sliderImage1.setAttribute("src", "images/"+images[i]) +
        sliderImage2.setAttribute("src", "images/"+images[i+1]) +
        sliderImage3.setAttribute("src", "images/"+images[i+2]) +
        sliderImage4.setAttribute("src", "images/"+images[i-4]);
    } else if(i == 5){
        return sliderImage1.setAttribute("src", "images/"+images[i]) +
        sliderImage2.setAttribute("src", "images/"+images[i+1]) +
        sliderImage3.setAttribute("src", "images/"+images[i-5]) +
        sliderImage4.setAttribute("src", "images/"+images[i-4]);
    } else if(i == 6){
        return sliderImage1.setAttribute("src", "images/"+images[i]) +
        sliderImage2.setAttribute("src", "images/"+images[i-6]) +
        sliderImage3.setAttribute("src", "images/"+images[i-5]) +
        sliderImage4.setAttribute("src", "images/"+images[i-4]);
    } else {
        return sliderImage1.setAttribute("src", "images/"+images[i]) +
        sliderImage2.setAttribute("src", "images/"+images[i+1]) +
        sliderImage3.setAttribute("src", "images/"+images[i+2]) +
        sliderImage4.setAttribute("src", "images/"+images[i+3]);
    }
}

function setImgPrev(carousel){
    let sliderImage1 = document.querySelector("."+ carousel + " img.cover1");
    let sliderImage2 = document.querySelector("."+ carousel + " img.cover2");
    let sliderImage3 = document.querySelector("."+ carousel + " img.cover3");
    let sliderImage4 = document.querySelector("."+ carousel + " img.cover4");
    if(i == 6){
        return sliderImage1.setAttribute("src", "images/"+images[i]) +
        sliderImage2.setAttribute("src", "images/"+images[i-6]) +
        sliderImage3.setAttribute("src", "images/"+images[i-5]) +
        sliderImage4.setAttribute("src", "images/"+images[i-4]);
    } else if(i == 5){
        return sliderImage1.setAttribute("src", "images/"+images[i]) +
        sliderImage2.setAttribute("src", "images/"+images[i+1]) +
        sliderImage3.setAttribute("src", "images/"+images[i-5]) +
        sliderImage4.setAttribute("src", "images/"+images[i-4]);
    } else if(i == 4){
        return sliderImage1.setAttribute("src", "images/"+images[i]) +
        sliderImage2.setAttribute("src", "images/"+images[i+1]) +
        sliderImage3.setAttribute("src", "images/"+images[i+2]) +
        sliderImage4.setAttribute("src", "images/"+images[i-4]);
    } else {
        return sliderImage1.setAttribute("src", "images/"+images[i]) +
        sliderImage2.setAttribute("src", "images/"+images[i+1]) +
        sliderImage3.setAttribute("src", "images/"+images[i+2]) +
        sliderImage4.setAttribute("src", "images/"+images[i+3]);
    }
}

//Fênetre modale

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

function openTheModal() {
    modal.style.display = "block";
}

function closeTheModal() {
    modal.style.display = "none";
}