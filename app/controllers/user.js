"use strict";

class User{

    constructor(email, firstName, lastName){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get email(){
        return this._email;
    }

    set email(val){
        this._email = val;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(val){
        this._firstName = val;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(val){
        this._lastName = val;
    }

    
}