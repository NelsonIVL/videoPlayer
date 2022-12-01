"use strict";

const videosURL = 'http://localhost:3000/movies';

function initShoppingCart(){
    //console.log(sessionStorage.getItem('shoppingCart'));
    if(sessionStorage.getItem('Videos') == null){
        let videos = new ShoppingCart();
        writeShoppingCart(videos);
    }

}

function readShoppingCart(){
    let videos = sessionStorage.getItem('Videos');
    return JSON.parse(videos);
}

function writeShoppingCart(videos){
    sessionStorage.setItem('Videos', JSON.stringify(videos));
}

function updateVideo(){
    let videos = readShoppingCart();

    loadCartProducts(videosURL + 'cart', cart, products =>{
        cart._products = JSON.parse(products);
        console.log(products);
        writeShoppingCart(videos);

        window.location.assign('pelicula.html');
    }, err => console.log(err))
    
}

initShoppingCart();