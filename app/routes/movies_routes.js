"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');


//PODEMOS USER QUERY PARAMETERS PARA ENGLOBAR TODO Y NO HACER MUCHOS GET
router.route('/').get((req, res) => {
    if(Object.keys(req.query).length === 0){
        dataHandler.getVideos(req,res);
    }else
        dataHandler.getVideoByGenre(req,res);
}).post((req,res) => dataHandler.getVideoPOST(req,res));

//router.route('/:name'


module.exports = router;