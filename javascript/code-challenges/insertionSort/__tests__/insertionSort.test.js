'use strict';

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

describe('insertion sort', () => {

  it('should successfully return an array in order',  () => {
    let arr = [8,4,23,42,16,15];

    expect(insertionSort(arr)).toEqual([4,8,15,16,23,42]);
  });

  it('should successfully return an array in order when there is a negative number',  () => {
    let arr = [20,18,12,8,5,-2];

    expect(insertionSort(arr)).toEqual([-2,5,8,12,18,20]);
  });

  it('should successfully return an array in order when there are multiples of the same number',  () => {
    let arr = [5,12,7,5,5,7];

    expect(insertionSort(arr)).toEqual([5,5,5,7,7,12]);
  });

  it('should successfully return an array in order when the array is nearly sorted',  () => {
    let arr = [2,3,5,7,13,11];

    expect(insertionSort(arr)).toEqual([2,3,5,7,11,13]);
  });

});