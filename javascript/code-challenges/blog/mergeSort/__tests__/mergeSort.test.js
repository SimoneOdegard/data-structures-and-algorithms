'use strict';

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

describe('insertion sort', () => {

  it('should successfully return an array in order',  () => {
    let arr = [8,4,23,42,16,15];

    expect(mergeSort(arr)).toEqual([4,8,15,16,23,42]);
  });

  it('should successfully return an array in order when there is a negative number',  () => {
    let arr = [20,18,12,8,5,-2];

    expect(mergeSort(arr)).toEqual([-2,5,8,12,18,20]);
  });

  it('should successfully return an array in order when there are multiples of the same number',  () => {
    let arr = [5,12,7,5,5,7];

    expect(mergeSort(arr)).toEqual([5,5,5,7,7,12]);
  });

  it('should successfully return an array in order when the array is nearly sorted',  () => {
    let arr = [2,3,5,7,13,11];

    expect(mergeSort(arr)).toEqual([2,3,5,7,11,13]);
  });

});