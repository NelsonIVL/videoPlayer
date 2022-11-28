"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');


//PODEMOS USER QUERY PARAMETERS PARA ENGLOBAR TODO Y NO HACER MUCHOS GET
router.route('/').get((req, res) => {
    let movies;
    console.log(req.query.title);
    try {
        movies = dataHandler.getVideos();
        console.log(movies)
    } catch (e) {
        res.status(400).send("Error al obtener las películas");
    }
    res.status(200).send(movies);
});

//router.route('/:name')

module.exports = router;