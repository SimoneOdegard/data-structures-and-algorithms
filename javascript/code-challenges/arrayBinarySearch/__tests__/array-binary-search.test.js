'use strict';

const binarySearch = require('../array-binary-search.js');

describe('** BINARY SEARCH **', () => {
  it('should return the index of the array element equal to the search key or -1 if the element does not exist', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toStrictEqual(-1);

  })
})
