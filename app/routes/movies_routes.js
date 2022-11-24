"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');

router.route('/').get((req, res) => {
    let movies;
    try {
        movies = dataHandler.getVideos();
        console.log(movies)
    } catch (e) {
        res.status(400).send("Error al obtener las películas");
    }
    res.status(200).send(movies);
});

module.exports = router;