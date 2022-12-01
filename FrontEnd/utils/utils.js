"use strict";


const videosURL = 'http://localhost:3000/movies';

function loadMovieToDisp(){
    //console.log(sessionStorage.getItem('shoppingCart'));
    if(sessionStorage.getItem('Videos') == null){
        let video = new VideoCarry();
        writeMovieToDisp(video);
    }
}

function readMovieToDisp(){
    let videos = sessionStorage.getItem('Videos');
    return JSON.parse(videos);
}

function writeMovieToDisp(videos){
    sessionStorage.setItem('Videos', JSON.stringify(videos));
}

function preloadMovie(){
    let movieLoaded = new VideoCarry();
    Object.assign(movieLoaded,readMovieToDisp());

    loadMovieFromPost(videosURL,movieLoaded._videoProxies,movie => {
        console.log(movie);
        let vid = new VideoCarry();
        Object.assign(vid,readMovieToDisp());
        vid.video = movie;
        writeMovieToDisp(vid);
        window.location.href = 'pelicula.html';
    },err=>console.log(err));
}


loadMovieToDisp();