"use strict";

const arrayA = ["uova", "latte", "estathè", "taralli", "miele", "cereali"];

// Removing the first element of the array
function rimuoviDallaTesta(arr){

    if (arr.length === 0) return "Non ci sono elementi";

    const arr2 = [];
    const arrLength = arr.length;
    for (let i = 1; i < arrLength; i++){
        arr2[i-1] = arr[i];
    }
    return arr2;
}

console.log(rimuoviDallaTesta(arrayA));