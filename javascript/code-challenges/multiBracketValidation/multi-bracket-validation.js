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

console.log(multiBracketValidation('({[])}'));