'use strict';

const quickSort = require('../quickSort.js');

describe('quick sort', () => {

  it('should successfully return an array in order',  () => {
    let arr = [8,4,23,42,16,15];

    expect(quickSort(arr, 0, arr.length - 1)).toEqual([4,8,15,16,23,42]);
  });

  it('should successfully return an array in order when there is a negative number',  () => {
    let arr = [20,18,12,8,5,-2];

    expect(quickSort(arr, 0, arr.length - 1)).toEqual([-2,5,8,12,18,20]);
  });

  it('should successfully return an array in order when there are multiples of the same number',  () => {
    let arr = [5,12,7,5,5,7];

    expect(quickSort(arr, 0, arr.length - 1)).toEqual([5,5,5,7,7,12]);
  });

  it('should successfully return an array in order when the array is nearly sorted',  () => {
    let arr = [2,3,5,7,13,11];

    expect(quickSort(arr, 0, arr.length - 1)).toEqual([2,3,5,7,11,13]);
  });

});