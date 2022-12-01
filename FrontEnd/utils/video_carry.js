"use strict";

class VideoProxy{
    constructor(videoId){
        this.videoId = videoId;
    }

    get videoId(){
        return this._videoId;
    }

    set videoId(value){
        this._videoId = value;
    }
}


class VideoCarry{
    
    constructor(){
        this.videoProxies = "";
        this.video = {};
    }
    
    get videoProxies(){
        return this._videoProxies;
    }

    set videoProxies(value){
        this._videoProxies = value;
    }

    get vide(){
        return this._video;
    }

    set vide(value){
        this._video = value;
    }

}