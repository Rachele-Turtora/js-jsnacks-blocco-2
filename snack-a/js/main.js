"use strict";

const array = [1, 4, 7, 9, 6];

// Counting array elements
function contaElementi(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        count++;
    }
    return count;
}

console.log(`L'array contiene ${contaElementi(array)} elementi`);