"use strict";

const array = ["uova", "latte", "estathè", "taralli", "miele", "cereali"];

// Printing out the elements of an array separated by commas
function stampa(arr) {
    let stringa = "";

    if (arr.length === 0) return stringa;
    
    for (let i = 0; i < arr.length - 1; i++) {
        stringa += arr[i] + ", ";
    }
    stringa += arr[arr.length - 1]; // Adding the last element without a comma

    return stringa;
}

console.log(stampa(array));