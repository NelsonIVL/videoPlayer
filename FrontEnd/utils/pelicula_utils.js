
let productContainer = document.getElementById('movieDetails');

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

function productListToHTML(productList) {
    console.log(productList);
    productContainer.innerHTML = '<div class="row mb-2 mt-2">' + productList.map(productToHTML).join("\n") + '\n</div>';
}


function preloadShoppingCart(){

    let cart = new ShoppingCart();
    Object.assign(cart, readShoppingCart());
    let priceSum = cart.calculateTotal();
    console.log();
    let prox = [];
    for(let i = 0; i < cart._products.length; i++){
        let prodDetail = productDetailsToHtml(cart._products[i], cart.productproxies[i]._amount);
        //cargar prod
        prox.push(prodDetail);
        

    }
    summaryContainer.innerHTML = prox.join("\n");
    
    //cargar summary
    totalContainer.innerHTML = priceSummaryToHtml();

    priceContainer.innerHTML = `Total a pagar: $${priceSum}`;

}