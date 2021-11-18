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

// Functions that display movie(s)
let principal_url = "http://localhost:8000/api/v1/titles/";
let best_movie_location = document.getElementsByClassName("box1")[0];

async function getInfoUrl(url)
// Get data of a single movie
{
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function showInfoUrl(data, insert_in)
// Show data of a single movie
{
    let to_insert = 
        `<img class="top_film" src="${data.image_url}" alt="">
          <div class="element_box">
           <div class="titre_video">${data.title}</div>
           <div class="play">Play</div>
           <div class="top_resume">
            <p>${data.long_description}</p>
           </div>
          </div>`;
    
    insert_in.innerHTML = to_insert;
}

async function displayBestMovie()
// Show the best movie(s) and display one if there are several.
{
    let imdb = 10;
    let value_to_decrement = 0.1;
    let results = [];
    let url = principal_url + "?imdb_score_min=" + String(imdb);

    while (results.length === 0) {
        let result = await getInfoUrl(url);
        url = principal_url + "?imdb_score_min=" + String(imdb);
        if(result.count === 0) {
            imdb -= value_to_decrement;
        } else {
            for (let movie of result.results) {
                results.push(movie)
            }
        }
    }
    let best_movie_selection = results[Math.floor(Math.random()*results.length)];
    let movie_data = await getInfoUrl(best_movie_selection.url)
    showInfoUrl(movie_data, best_movie_location);


}

displayBestMovie();


