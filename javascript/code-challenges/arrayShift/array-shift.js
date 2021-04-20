'use strict';

// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
// input [2, 4, 6, 8], 5 || output [2, 4, 5, 6, 8]
// input [4,8,15,23,42], 16 || output [4,8,15,16,23,42]

function insertShiftArray (arr, value) {
  let middle = Math.ceil(arr.length / 2);
  arr.splice(middle, 0, value);
  return arr;
}

//resource: https://masteringjs.io/tutorials/fundamentals/array-splice

module.exports = insertShiftArray;