"use strict";

const array = ["uova", "latte", "estathè", "taralli", "miele", "cereali"];
const element = "latte";

// Finding index of an element 
function trovaIndice(arr, word){

    let check = false;
    let position;

    for (let i = 0; i < arr.length; i++){
        if (word === arr[i]){
            check = true
            position = i
        }
    }

    if (check == false) return -1
    return position

}

console.log(`La parola "${element}" si trova in posizione ${trovaIndice(array, element)} dell'array`)