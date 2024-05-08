"use strict";

const arrayA = ["uova", "latte", "estathè", "taralli", "miele", "cereali"];

function rimuoviDallaTesta(arr){

    if (arr.length === 0) return "Non ci sono elementi";

    const arr2 = [];
    for (let i = 1; i < arr.length; i++){
        arr2.push(arr[i]);
    }
    return arr2;
}

console.log(rimuoviDallaTesta(arrayA));