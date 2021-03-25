var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x){
//   return x*2;
// }
// // console.log(numbers.map(double));
// //Filter - Create a new array by keeping the items that return true.
// var newNumber=[];

// function newDouble(x){
//   newNumber.push(x*2)
// }

// numbers.forEach(newDouble);
// console.log(newNumber)
//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia"

// console.log(emojipedia);

var meanings=[];

function saveMeanings(single){
meanings.push(single.meaning.substring(0,100));

}
console.log(meanings);
emojipedia.map(saveMeanings);
