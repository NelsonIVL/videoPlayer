"use strict";

function genreFilterHTML(video){
    return `
    <div class="card ml-2 mb-5 mt-5">
            <a href="pelicula.html"><img src="${video.title}"
                class="card-img-top" alt="Card image cap"></a>
            <div class="card-body">
                <h4>${video.title}</h4>
                <h5>${video.director}</h4>
            </div>
        </div>
    `
}

function genreListToHTML(movieList){
    let moviesContainer = document.getElementById('mainList');
    moviesContainer.innerHTML = movieList.map(genreFilterHTML);
}

