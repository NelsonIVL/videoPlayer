"use strict";

const express = require('express');
const router = express.Router();

const movieRouter = require('../routes/movies_routes');

router.use('/movies', movieRouter);

router.get('/', (req,res)=>{
    res.send('VideoPlayer project');
});

module.exports = router;
