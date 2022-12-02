


function MovieToHTML(video) {
    return ` 
    <!-- Video+Info --> 
        <div id="movieDisplay" class="container ml-5">
            <div id="movieVid" class="youtube-video-container">
                <iframe class="youtube-video" width="560" height="315" src=" ${video.videoLink}"> </iframe>
            </div>
            <div id = "movieName">
                <h2 class="ml-0 mb-5 col-12 mt-3" style="color:white; font-size: 40px"> ${video.title} </h2>
            </div>
        </div>
    
        <!-- MovieInfo --> 
        <div id="movieInfo" class="container ml-5">
            <table>
                <tr id="tabletitle">
                    <th>Director</th>
                    <th>Duración</th>
                    <th>Género</th>
                </tr>

                <tr id="movieData">
                    <td id="director">${video.director}</td>
                    <td id="duracion">${video.duration} min</td>
                    <td id="genero"> ${video.genre} </td>
                </tr>
            </table>

        </div>
        
        <!-- Description -->
        <div class="container mt-5 ml-5">
            <p id="Description">
                ${video.description}
            </p>
        </div>
    `
}
function recommendedToHTML(video){
    return ` 
        <div class="card ml-5" style="width: 18rem;">
            <a onclick = "preloadMovie()"><img class="card-img-top" src="${video.imageUrl}"
                alt="Card image cap" onclick= "loadID('${video._id}')"></a>
            <div class="card-body">
                <h4 class="card-text">${video.title}</h4>
            </div>
        </div>
    `
}


function videoToHTML(movieToDisp) {
    let movieContainer = document.getElementById('movieDetails');
    //console.log(movieToDisp);
    movieContainer.innerHTML = '<div class="row mb-2 mt-2">' + MovieToHTML(movieToDisp) + '\n</div>';
}

function loadID(id){
    let disp = readMovieToDisp();

    let newMovie = Object.assign(new VideoCarry(),disp);
    console.log(newMovie);
    newMovie._videoProxies = id;

    writeMovieToDisp(newMovie);
}

function preloadDetail(){
    let newVid = readMovieToDisp();
    console.log(JSON.parse(newVid.video));
    let obj = JSON.parse(newVid.video);
    videoToHTML(obj);
}

function recToHTML(moviesList){
    let recomendedContainer = document.getElementById('IdRecomendaciones');
    recomendedContainer.innerHTML = '<div class="row mb-2 mt-2">' + moviesList.map(recommendedToHTML) + '\n</div>' ;

}

preloadDetail();

loadMovies(videosURL).then(videos => {
    let start = Math.floor(Math.random() * 12)+1;
    let finish = Math.floor(Math.random() * 12);

    if(finish>=start){
        recToHTML(videos.slice(finish,start));
    }
    recToHTML(videos.slice(start,finish));
});