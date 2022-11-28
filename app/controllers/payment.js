"use strict";

class Payment{

    constructor(idUser, noTarjeta, fechaVencimiento, codigoS){
        this.idUser = idUser;
        this.noTarjeta = noTarjeta;
        this.fechaVencimiento = fechaVencimiento;
        this.codigoS = codigoS;
    }

    get idUser(){
        return this._idUser;
    }

    set idUser(val){
        this._idUser = val;
    }

    get noTarjeta(){
        return this._noTarjeta;
    }
    
    set noTarjeta(val){
        this._noTarjeta = val;
    }

    get fechaVencimiento(){
        return this._fechaVencimiento;
    }

    set fechaVencimiento(val){
        this._fechaVencimiento = val;
    }

    get codigoS(){
        return this._codigoS;
    }

    set codigoS(val){
        this._codigoS = val;
    }
}