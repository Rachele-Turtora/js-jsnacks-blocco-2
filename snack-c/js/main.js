"use strict";

const array = ["uova", "latte", "estathè", "taralli", "miele", "cereali"];

// Printing out the elements of an array separated by commas
function stampa(arr) {
    let stringa = "";
    const arrLength = arr.length;

    if (arr.length === 0) return stringa;
    
    for (let i = 0; i < arrLength; i++) {
        stringa += arr[i];

        if (i < arrLength -1){
            stringa += ", ";
        }
    }
    return stringa;
}

console.log(stampa(array));