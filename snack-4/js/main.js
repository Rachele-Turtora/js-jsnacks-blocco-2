/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

"use strict";

const lista1 = [];
const lista2 = [2, 3, 4, 5];

let minArray;

if (lista1.length < lista2.length){
    minArray = lista1;
} else if (lista2.length < lista1.length) {
    minArray = lista2;
}

while (lista1.length !== lista2.length){
    minArray.push(Math.ceil(Math.random() * 10));
}

console.log(lista1);
console.log(lista2);
