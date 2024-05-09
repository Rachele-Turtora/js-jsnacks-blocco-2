"use strict";

const array = [1, 4, 7, 9, 6];

// Counting array elements
function contaElementi(arr){
    let count = 0;
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++){
        count++;
    }
    return count;
}

console.log(`L'array contiene ${contaElementi(array)} elementi`);