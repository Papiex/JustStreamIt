// Slider
let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
let actual_image = 0;

function prev(carousel)
// Slide previous image on the selected carousel on click
{
    if(actual_image <= 0) actual_image = images.length;
        actual_image--;
        return setImg(carousel);
}

function next(carousel)
// Slide next image on the selected carousel on click
{
    if(actual_image >= images.length-1) actual_image = -1;
        actual_image++;
        return setImg(carousel);
}

function setImg(carousel)
// Put the four images in the right order when click on next or previous 
{
    let sliderImage1 = document.querySelector("."+ carousel + " img.cover1");
    let sliderImage2 = document.querySelector("."+ carousel + " img.cover2");
    let sliderImage3 = document.querySelector("."+ carousel + " img.cover3");
    let sliderImage4 = document.querySelector("."+ carousel + " img.cover4");

    if(actual_image == 4){
        return sliderImage1.setAttribute("src", "images/"+images[actual_image]) +
        sliderImage2.setAttribute("src", "images/"+images[actual_image+1]) +
        sliderImage3.setAttribute("src", "images/"+images[actual_image+2]) +
        sliderImage4.setAttribute("src", "images/"+images[actual_image-4]);

    } else if(actual_image == 5){
        return sliderImage1.setAttribute("src", "images/"+images[actual_image]) +
        sliderImage2.setAttribute("src", "images/"+images[actual_image+1]) +
        sliderImage3.setAttribute("src", "images/"+images[actual_image-5]) +
        sliderImage4.setAttribute("src", "images/"+images[actual_image-4]);

    } else if(actual_image == 6){
        return sliderImage1.setAttribute("src", "images/"+images[actual_image]) +
        sliderImage2.setAttribute("src", "images/"+images[actual_image-6]) +
        sliderImage3.setAttribute("src", "images/"+images[actual_image-5]) +
        sliderImage4.setAttribute("src", "images/"+images[actual_image-4]);

    } else {
        return sliderImage1.setAttribute("src", "images/"+images[actual_image]) +
        sliderImage2.setAttribute("src", "images/"+images[actual_image+1]) +
        sliderImage3.setAttribute("src", "images/"+images[actual_image+2]) +
        sliderImage4.setAttribute("src", "images/"+images[actual_image+3]);
    }
}

//Fênetre modale
let modal = document.getElementById("my_modal");
let span = document.getElementsByClassName("close")[0];

function openTheModal()
// Open a modal box
{
    modal.style.display = "block";
}

function closeTheModal()
// Close the modal box
{
    modal.style.display = "none";
}