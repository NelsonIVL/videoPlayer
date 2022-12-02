"use strict";

const fs = require('fs');

const Users = require('./user');
const Videos = require('./videos');

const Video = require('./../models/videos');
const User = require('./../models/users');
const {
    restart
} = require('nodemon');

function getUsers(req, res) {
    User.find({})
        .then(users => res.status(200).json(users))
        .catch(err => res.status(400).send(err));
}

function createUser(req, res) {
    let newUser = User(req.body);

    newUser.save()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).send(err));
}

function getUserById(req, res) {
    let id = req.params.id;
    User.findOne({
        _id: `${id}`
    }).then(user => res.status(200).json(user));
}

function updateUser(req, res) {
    let newUser = req.body;
    let id = req.params.id;

    User.findOneAndUpdate({
            id: `${id}`
        }, newUser, {
            new: true
        })
        .then(user => {
            res.type('text/plain; charset=utf-8');
            res.send(`Movie with id ${id} was updated`);
        });
}

function deleteUser(req, res) {
    let id = req.params.id;

    User.findByIdAndDelete(`${id}`)
        .then(user => {
            res.type('text/plain; charset=utf-8');
            res.send(user != undefined ? `User with id: ${id} was deleted` : `No user with id: ${id} was found`);
        }).catch(movie => res.status(400).send('Bad request'));
}

function getVideos(req, res) {
    //console.log(req.query);

    Video.find({})
        .then(movies => res.status(200).json(movies))
        .catch(err => res.status(400).send(err));
    
    
}

function getVideoByGenre(req, res){
    let genre = req.query.genre;
        Video.find({
            genre: `${genre}`
        }).then(movies => res.status(200).json(movies)).catch(err => res.status(400).send(err));
}

function getVideoByID(req, res) {
    let id = req.params.id;
    Video.findOne({
        _id: `${id}`
    }).then(movie => res.status(200).json(movie));
}

function getVideoPOST(req, res) {
    let id = req.body;
    Video.findOne({
        _id: `${id}`
    }).then(movie => res.status(200).json(movie));
}

function createMovie(req, res) {
    //Crea nueva película en la colección, falta revisar si existe

    let newMovie = Video(req.body);
    newMovie.save()
        .then(movie => res.status(200).send(`Película ${movie.title} creada`))
        .catch(err => res.status(400).send(err));
}

// function getMovieByGenre(req, res) {
//     let genre = req.params.genre

//     Video.find({genre:`${genre}`}).then(movies => res.status(200).json);
// }


function deleteVideoById(req, res) {
    let id = req.params.id;

    Video.findByIdAndDelete(`${id}`)
        .then(movie => {
            res.type('text/plain; charset=utf-8');
            res.send(movie != undefined ? `Movie with id: ${id} was deleted` : `No movie with id: ${id} was found`);
        }).catch(movie => res.status(400).send('Bad request'));

}

function updateVideo(req, res) {
    let newVideo = req.body;
    let id = req.params.id;

    Video.findOneAndUpdate({
            id: `${id}`
        }, newVideo, {
            new: true
        })
        .then(movie => {
            res.type('text/plain; charset=utf-8');
            res.send(`Movie with id ${id} was updated`);
        });
}

//Para videos
exports.getVideos = getVideos;
exports.getVideoByID = getVideoByID;
exports.deleteVideoById = deleteVideoById;
exports.createMovie = createMovie;
exports.updateVideo = updateVideo;
exports.getVideoPOST = getVideoPOST;
exports.getVideoByGenre = getVideoByGenre;

//Para usuarios
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.createUser = createUser;
exports.deleteUser = deleteUser;