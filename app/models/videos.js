"use strict";

const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

let mongoDB = 'mongodb+srv://Ejemplo:ejemplo@cluster0.wv5rvio.mongodb.net/VideoPlayer';

mongoose.connect(mongoDB,{
    useNewUrlParser: true
});

let videoSchema = mongoose.Schema({
    videoLink: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        enum: ["TERROR","DRAMA","COMEDIA","ROMANCE","ACCION"],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

let Video = mongoose.model('video',videoSchema);

// let firstVideo = {
//     videoLink: "https://www.youtube.com/watch?v=r6t0czGbuGI",
//     title: "Spider-Man No Way Home",
//     director: "Alguien",
//     duration: "140",
//     genre: "TERROR",
//     description: "Algo",
//     imageUrl: "link",
// };

// let newVideo = Video(firstVideo);
// newVideo.save().then((doc)=>console.log(doc));

module.exports = Video;


