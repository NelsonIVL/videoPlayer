"use strict";

class User{

    constructor(email, firstName, lastName, password){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
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

    get password(){
        return this._password;
    }

    set password(val){
        this._password = val;
    }

    static generateUser(obj){
        let email = obj.email != undefined ? obj.email : obj._email;
        let firstName = obj.firstName != undefined ? obj.firstName : obj._firstName;
        let lastName = obj.lastName != undefined ? obj.lastName : obj._lastName;
        let password = obj.password != undefined ? obj.password : obj._password;

        return User(email,firstName,lastName,password);
    }
    
}

module.exports = User;