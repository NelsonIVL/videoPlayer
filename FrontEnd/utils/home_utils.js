let catalogo = document.getElementById('filaCatalogo');

function CardToHTML(video) {
    return ` 
        <div class="card ml-5" style="width: 18rem;">
            <a href="pelicula.html"><img class="card-img-top" src="${video.imageUrl}"
                alt="Card image cap onclick= "loadID('${video._id}')"></a>
            <div class="card-body">
                <h4 class="card-text">${video.title}</h4>
            </div>
        </div>
    `
}


function VideoListToHTML(videoList) {
    console.log(videoList);
    catalogo.innerHTML = videoList.map(CardToHTML).join("\n");
}

function loadID(id){

}

loadMovies(videosURL).then(videos => {
    VideoListToHTML(videos);
});

