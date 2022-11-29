"use strict";

const mongoose = require('mongoose');

let mongoDB = 'mongodb+srv://Ejemplo:ejemplo@cluster0.wv5rvio.mongodb.net/VideoPlayer';

mongoose.connect(mongoDB,{
    useNewUrlParser: true,
});

let userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

let User = mongoose.model('usuario',userSchema);

// let firstUser = {
//     firstName: "Nelson",
//     lastName: "Vargas",
//     email: "is708203@iteso.mx",
//     password: "impossibleToHack"
// };

// let newUser = User(firstUser);
// newUser.save().then((doc)=>console.log(doc));

module.exports = User;