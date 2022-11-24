"use strict";

const fs = require('fs');

const User = require('./user');
const Video = require('./videos');

let contentUsers = fs.readFileSync('./app/data/users.json');
let contentVideos = fs.readFileSync('./app/data/videos.json');

const videos = JSON.parse(contentVideos).map(Video.generateVideo);
const users = JSON.parse(contentUsers).map(User.generateUser);

function getUsers(){
    return users;
}

function getUserById(uuid){
    let index = users.findIndex(item => item.uuid == uuid);
    return users[index];
}

function updateUser(newUser, uuid){
    if(users.find(item => item.uuid == uuid)){
        let index = users.findIndex(item => item.uuid == uuid);
        if(typeof(newUser) == 'string'){
            let obj = JSON.parse(newUser);
            users[index] = obj;
            fs.writeFileSync('./../data/users.json',JSON.stringify(users));
        }else{
            users[index] = newUser;
            fs.writeFileSync('./../data/users.json',JSON.stringify(users));
        }
    }else
        return false;
}

function deleteUser(uuid){

}

function getVideos(){
    return videos;
}

function getVideoByTitle(title){
    let index = videos.findIndex(item => item.title == title);
    return videos[index];
}

function getVideosByGenre(genre){
    let filter = [];
    
    for(let i in  videos){
        if(videos[i].genre.includes(genre))
            filter.push(videos[i]);
    }
    return filter;
}

function getVideosByDirector(director){
    let filter = [];
    
    for(let i in  videos){
        if(videos[i].director.includes(director))
            filter.push(videos[i]);
    }
    return filter;
}

function deleteVideo(uuid){

}

function updateVideo(newVideo, uuid){

}



//Para videos
exports.getVideos = getVideos;
exports.getVideoByTitle = getVideoByTitle;
exports.getVideosByDirector = getVideosByDirector;
exports.getVideosByGenre = getVideosByGenre;

//Para usuarios
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
