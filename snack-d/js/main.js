"use strict";

const arrayA = ["uova", "latte", "estathè", "taralli", "miele", "cereali"];

// Removing the last element of the array
function rimuoviDallaCoda(arr){

    if (arr.length === 0) return "Non ci sono elementi";

    const arrLength = arr.length - 1;
    const arr2 = [];
    
    for (let i = 0; i < arrLength; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}

console.log(rimuoviDallaCoda(arrayA));