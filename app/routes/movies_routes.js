"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');


//PODEMOS USER QUERY PARAMETERS PARA ENGLOBAR TODO Y NO HACER MUCHOS GET
router.route('/').get((req, res) => dataHandler.getVideos(req, res))
    .post((req,res) => dataHandler.getVideoPOST(req,res));

//router.route('/:name')

module.exports = router;