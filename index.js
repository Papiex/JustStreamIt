// Slider
let actual_image = 0;

function prev(carousel, movies_list)
// Slide previous image on the selected carousel on click
{
    if(actual_image <= 0) actual_image = 7;
        actual_image--;
        setImg(carousel, movies_list);
}

function next(carousel, movies_list)
// Slide next image on the selected carousel on click
{
    if(actual_image >= 7-1) actual_image = -1;
        actual_image++;
        setImg(carousel, movies_list)
}

function setImg(carousel, movies_list)
// Put the four images in the right order when click on next or previous 
{
    let sliderImage1 = document.querySelector("."+ carousel + " img.cover1");
    let sliderImage2 = document.querySelector("."+ carousel + " img.cover2");
    let sliderImage3 = document.querySelector("."+ carousel + " img.cover3");
    let sliderImage4 = document.querySelector("."+ carousel + " img.cover4");

    if(actual_image == 4){
        sliderImage1.setAttribute("src", movies_list[actual_image].image_url);
        sliderImage2.setAttribute("src", movies_list[actual_image+1].image_url);
        sliderImage3.setAttribute("src", movies_list[actual_image+2].image_url);
        sliderImage4.setAttribute("src", movies_list[actual_image-4].image_url);

    } else if(actual_image == 5){
        sliderImage1.setAttribute("src", movies_list[actual_image].image_url);
        sliderImage2.setAttribute("src", movies_list[actual_image+1].image_url);
        sliderImage3.setAttribute("src", movies_list[actual_image-5].image_url);
        sliderImage4.setAttribute("src", movies_list[actual_image-4].image_url);

    } else if(actual_image == 6){
        sliderImage1.setAttribute("src", movies_list[actual_image].image_url);
        sliderImage2.setAttribute("src", movies_list[actual_image-6].image_url);
        sliderImage3.setAttribute("src", movies_list[actual_image-5].image_url);
        sliderImage4.setAttribute("src", movies_list[actual_image-4].image_url);

    } else {
        sliderImage1.setAttribute("src", movies_list[actual_image].image_url);
        sliderImage2.setAttribute("src", movies_list[actual_image+1].image_url);
        sliderImage3.setAttribute("src", movies_list[actual_image+2].image_url);
        sliderImage4.setAttribute("src", movies_list[actual_image+3].image_url);
    }
}

// Functions that display movie(s)
const PRINCIPAL_URL = "http://localhost:8000/api/v1/titles/";
let best_movie_location = document.getElementsByClassName("box1")[0];
let best_carousel_movies_location = document.getElementsByClassName("carousel1")[0];

async function getInfoUrl(url)
// Get json data of request
{
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function showDataBestMovie(data, insert_in)
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

async function getBestMovies()
// Show the seventh best movies
{
    let imdb_min = 10;
    let value_to_decrement = 0.1;
    let results = [];
    let url = PRINCIPAL_URL + "?imdb_score_min=" + String(imdb_min);
    let search_result = await getInfoUrl(url);

    while (search_result.count <= 6) {
        imdb_min -= value_to_decrement;
        url = PRINCIPAL_URL + "?imdb_score_min=" + String(imdb_min);
        search_result = await getInfoUrl(url);
    }

    for (let result of search_result.results) {
        results.push(result)
    }

    if (search_result.count > 5) {
        let url_next_page = search_result.next;
        search_result = await getInfoUrl(url_next_page)
        for (let result of search_result.results) {
            results.push(result)
        }
    }

    results.sort((a, b) => b.imdb_score-a.imdb_score);
    return results;
}

const bestMovies = async () => {
    const BEST_MOVIES_RESULT = await getBestMovies();
    createImgElements(best_carousel_movies_location, BEST_MOVIES_RESULT);
    console.log(BEST_MOVIES_RESULT)
}


async function createImgElements(location, movies_list)
// Create four div with "element" class at the location
{
    let div = document.createElement("div");
    div.classList.add("element");
    let button_prev = document.createElement("button");
    button_prev.classList.add("buttonprev");
    button_prev.setAttribute("onclick", `prev(${location})`);
    let img = document.createElement("img")
    img.setAttribute("src", "images/leftarrow.png");
    button_prev.appendChild(img);
    div.appendChild(button_prev);
    location.appendChild(div);

    for (let step = 0; step < 4; step++) {
        let div = document.createElement("div");
        div.classList.add("element");
        let img = document.createElement("img");
        img.classList.add("cover" + String(step + 1));
        img.setAttribute("onclick", "openTheModal()");
        img.setAttribute("src", `${movies_list[step].image_url}`)
        div.appendChild(img);
        location.appendChild(div);
    }

    div = document.createElement("div");
    div.classList.add("element");
    let button_next = document.createElement("button");
    button_next.classList.add("buttonnext");
    button_next.setAttribute("onclick", `next(${location})`);
    img = document.createElement("img")
    img.setAttribute("src", "images/rightarrow.png");
    button_next.appendChild(img);
    div.appendChild(button_next);
    location.appendChild(div);
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

bestMovies();
