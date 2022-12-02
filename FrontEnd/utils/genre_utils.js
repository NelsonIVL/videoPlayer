"use strict";

function genreFilterHTML(video){
    return `
    <div class="card ml-2 mb-5 mt-5">
            <a onclick = preloadMovie()><img src="${video.imageGenre}"
                class="card-img-top" alt="Card image cap" onclick = loadID('${video._id}')></a>
            <div class="card-body">
                <h4>${video.title}</h4>
                <h5>${video.director}</h4>
            </div>
        </div>
    `
}

function genreListToHTML(movieList){
    let moviesContainer = document.getElementById('mainList');
    moviesContainer.innerHTML = '<div class="row mt-5">' + movieList.map(genreFilterHTML).join("\n") + '\n</div>';
}

function loadID(id){
    let disp = readMovieToDisp();

    let newMovie = Object.assign(new VideoCarry(),disp);
    console.log(newMovie);
    newMovie._videoProxies = id;

    writeMovieToDisp(newMovie);
}

function preloadGenre(genre){
    console.log("Cargando por "+genre);
    loadMovies(videosURL+`?genre=${genre}`).then(movies => {
        console.log(movies);
        genreListToHTML(movies);
    })
}



