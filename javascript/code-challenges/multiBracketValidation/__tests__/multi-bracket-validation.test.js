'use strict';

function multiBracketValidation(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
      count++
    } else if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
      if (count == 0) {
        return false
      } else {
        count--
      }
    }
  }
  if (count == 0) {
    return true;
  }
  return false;
};

describe('bracket validation', () => {

  it('should return true with matching {} brackets',  () => {

    expect(multiBracketValidation('{}')).toBe(true);
  });

  it('should return true with matching () brackets',  () => {

    expect(multiBracketValidation('()')).toBe(true);
  });

  it('should return true with matching [] brackets',  () => {

    expect(multiBracketValidation('[]')).toBe(true);
  });

  it('should return true with multiple brackets',  () => {

    expect(multiBracketValidation('({})[]')).toBe(true);
  });

  it('should return true with words inside the brackets',  () => {

    expect(multiBracketValidation('(){yahoo i got it}[]')).toBe(true);
  });

  it('should return false with mismatched brackets',  () => {

    expect(multiBracketValidation('([}')).toBe(false);
  });

});
