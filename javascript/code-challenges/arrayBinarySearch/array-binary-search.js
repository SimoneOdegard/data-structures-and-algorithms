'use strict';

/*
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.
NOTE: The search algorithm used in your function should be a binary search.

Input: [4,8,15,16,23,42], 15
Output:  2

Input: [11,22,33,44,55,66,77], 90
Output: -1

Input: [1, 2, 3, 5, 6, 7], 4
Output: -1
*/

// return index of array's element (same element inside of array) that is equal to the search key
// return -1 if element does not exist


function binarySearch (arr, searchElem) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
      if (arr[middle] === searchElem) {
        return middle;
      } else if (arr[middle] < searchElem) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    return -1;
}

// resource: https://stackabuse.com/binary-search-in-javascript/

module.exports = binarySearch;