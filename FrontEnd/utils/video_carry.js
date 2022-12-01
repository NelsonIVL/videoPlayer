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
    }
    
    get videoProxies(){
        return this._videoProxies;
    }

    set videoProxies(value){
        this._videoProxies = value;
    }
}