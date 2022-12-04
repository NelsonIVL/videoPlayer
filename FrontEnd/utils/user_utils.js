"use strict";

//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

//const User = require("../../app/models/users");

function ReadModal(){
    console.log("Llamada");
    let FirstName = document.getElementById("Name").value;
    let LastName = document.getElementById("LastName").value;
    let correo = document.getElementById("correoRegistrado").value;
    let Password = document.getElementById("passwordRegistro").value;
    let Password2 = document.getElementById("passwordRegistro2").value;

    //console.log(FirstName);


    if(Password !== Password2) return;

    //let encryptedPassword = bcrypt.hashSync(Password, 10);
    
    let newUser = {"email":correo,"firstName":FirstName,"lastName":LastName,"password":Password}

    
    //let newUser =  User(correo, FirstName, LastName, Password); //(email, firstName, lastName, password)
    console.log(newUser);
    createUser('http://localhost:3000/admin/users',newUser,(res) =>{
        
        console.log("ENTRO");
        
        window.location.href = 'home.html';

    },(err) => console.log(err));
}

function skipLogin(){
    window.location.href = 'home.html';
}

