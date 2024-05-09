"use strict";

const array = ["uova", "latte", "estathè", "taralli", "miele", "cereali"];
const element = "miele";

// Finding index of an element 
function trovaIndice(arr, word){

    const arrLength = arr.length;
    let i = 0;
    while (i < arrLength && arr[i] !== word){
        i++;
    }

    if (i === arrLength){
        return -1;
    }
    return i;
}

console.log(`La parola "${element}" si trova in posizione ${trovaIndice(array, element)} dell'array`);