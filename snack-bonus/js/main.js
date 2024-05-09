"use strict";

const arrayA = ["uova", "latte", "estathè", "taralli", "miele"];
const element = "cereali";

// Inserting an element at the beginning of the array
function inserisciInTesta(arr, word){

    const arrB = [word];
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; i++){
        arrB[i+1] = arr[i];
    }
    return arrB;
}

console.log(inserisciInTesta(arrayA, element));