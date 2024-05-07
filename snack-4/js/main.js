/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

"use strict";

const lista1 = [3, 5, 1, 8, 2, 4, 5]
const lista2 = [0, 5, 2, 8, 5, 4, 7, 6, 1, 2, 4]

if (lista1.length < lista2.length){
    while (lista1.length < lista2.length){
        lista1.push(Math.ceil(Math.random() * 10))
    }
} else {
    while (lista2.length < lista1.length){
        lista2.push(Math.ceil(Math.random() * 10))
    }
}

console.log(lista1)
console.log(lista1.length)

console.log(lista2)
console.log(lista2.length)