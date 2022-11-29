"use strict";

const express = require('express');
const router = express.Router();

const movieRouter = require('../routes/movies_routes');
const adminRouter = require('../routes/admin_route');

router.use('/movies', movieRouter);
router.use('/admin',adminRouter); //TODO: Agregar Middleware de autenticación.


router.get('/', (req,res)=>{
    res.send('VideoPlayer project');
});

module.exports = router;
