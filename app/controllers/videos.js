"use strict";

class Video{

    constructor(videoLink, title, director, duration, genre, description, imageUrl){
        this.uuid = Video.generateUuid(10); //Podemos quitarlo si vamos a guardarlos en una colección de Mongo
        this.videoLink = videoLink;
        this.title = title;
        this.director = director;
        this.duration = duration; //En minutos
        this.genre = genre;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    get uuid(){
        return this.uuid;
    }

    set uuid(val){
        this._uuid = val;
    }

    get videoLink(){
        return this._videoLink;
    }

    set videoLink(val){
        this._videoLink = val;
    }

    get title(){
        return this._title;
    }

    set title(val){
        this._title = val;
    }

    get director(){
        return this._director;
    }

    set director(val){
        this._director = val;
    }

    get duration(){
        return this._duration;
    }

    set duration(val){
        this._duration = val;
    }

    get genre(){
        return this._genre;
    }

    set genre(val){
        this._genre = val;
    }

    get description(){
        return this._description;
    }

    set description(val){
        this._description = val;
    }

    get imageUrl(){
        return this._imageUrl;
    }

    set imageUrl(val){
        this._imageUrl = val;
    }

    static generateVideo(obj){
        let videoLink = obj.videoLink != undefined ? obj.videoLink : obj._videoLink;
        let title = obj.title != undefined ? obj.title : obj._title;
        let director = obj.director != undefined ? obj.director : obj._director;
        let duration = obj.duration != undefined ? obj.duration : obj._duration;
        let genre = obj.genre != undefined ? obj.genre : obj._genre;
        let description = obj.description != undefined ? obj.description : obj._description;
        let imageUrl = obj.imageUrl != undefined ? obj.imageUrl : obj._imageUrl;

        return new Video(videoLink, title, director, duration, genre, description, imageUrl);
    }

    static generateUuid(len) {
        let uid = '';
        for (let i = 0; i < len; i++) {
            uid += Math.trunc(Math.random() * 10);
        }
        return uid;
    }

}