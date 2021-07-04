"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio1_1 = require("./ejercicios-P1/ejercicio1");
var ejercicio2_1 = require("./ejercicios-P1/ejercicio2");
var ejercicio3_1 = require("./ejercicios-P1/ejercicio3");
var ejercicio4_1 = require("./ejercicios-P1/ejercicio4");
var ejercicio1_2 = require("./ejercicios-P2/ejercicio1");
var ejercicio2_2 = require("./ejercicios-P2/ejercicio2");
/**Ejercicios Parte 1 */
//ejercicio1
ejercicio1_1.getResultE1();
//ejercicio2
ejercicio2_1.getResultE2();
//ejercicio3
ejercicio3_1.getResultE3().then(function (result) {
    console.log('Result:', result);
});
//ejercicio4
ejercicio4_1.getResultE4();
/**Ejercicios Parte 2 */
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve(1);
        }
        else {
            reject('An error has occurred');
        }
    }, 500);
});
//ejercicio1
ejercicio1_2.getResultE1P2();
//ejercicio2
ejercicio2_2.getResultE2P2(myPromise);
