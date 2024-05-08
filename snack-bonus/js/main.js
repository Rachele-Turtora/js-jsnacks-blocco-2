"use strict";

const arrayA = ["uova", "latte", "estathè", "taralli", "miele"];
const element = "cereali";

// Inserting an element at the beginning of the array
function inserisciInTesta(arr, word){
    const arrB = [];
    arrB.push(word);
    for (let i = 0; i < arr.length; i++){
        arrB.push(arr[i]);
    }
    return arrB;
}

console.log(inserisciInTesta(arrayA, element));