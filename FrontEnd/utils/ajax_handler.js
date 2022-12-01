"use strict";

async function loadMovies(url) {
    // fetch from localhost:3000/movies
    let response = await fetch(url);
    if (response.status != 200) return [];
    let movies = await response.json();
    return movies;
}

function loadMovieFromPost(url, movieId, onSuccess, onError){
    let xhr = new XMLHttpRequest();
    let arr = [];
    arr.push(movieId);
    console.log(JSON.stringify(arr));
    xhr.open('POST',url);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(JSON.stringify(arr));
    xhr.onload = () => getXhrResponse(xhr, onSuccess,onError); 
}

// function deleteMovie(url, onSuccess, onError) {
//     let xhr = new XMLHttpRequest();

//     xhr.open('DELETE', url);
//     xhr.send();
//     xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
// }

function getXhrResponse(xhr, onSuccess, onError) {
    if (xhr.status == 200) {
        onSuccess(xhr.responseText);
    } else {
        onError(xhr.status + ': ' + xhr.statusText);
    }
}