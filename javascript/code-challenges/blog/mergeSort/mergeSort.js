'use strict';

let arr = [8, 4, 23, 42, 16, 15];

function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.splice(mid);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  };
  return arr;

}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i]
      i = i + 1
    } else {
      arr[k] = right[j]
      j = j + 1
    }
    k = k +1
  }

  while(i < left.length || j < right.length) {
    if (i === left.length) {
      arr.push(right[j]);
      j++
    } else {
      arr.push(left[i]);
      i++
    }
  }
  return arr;
}

console.log(mergeSort(arr));