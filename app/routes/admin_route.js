"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');

router.route('/movies').post((req,res)=>{
    dataHandler.createMovie(req,res);
});

router.route('/movies/:id')
    .get((req,res) => dataHandler.getVideoByID(req,res))
    .delete((req,res) => dataHandler.deleteVideoById(req,res)) //TODO: Middleware de autenticación
    .put((req,res)=> dataHandler.updateVideo(req,res));

//OPERACIONES DE ADMIN PARA USUARIOS
router.route('/users')
    .get((req,res) => dataHandler.getUsers(req,res));

router.route('/users/:id')
    .delete((req, res) => dataHandler.deleteUser(req,res))
    .put((req, res) => dataHandler.updateUser(req, res));

module.exports = router;