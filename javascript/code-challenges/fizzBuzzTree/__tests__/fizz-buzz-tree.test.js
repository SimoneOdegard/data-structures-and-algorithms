'use strict';

const binarySearchTree = require('../../tree/lib/binarySearchTree.js');
const fizzBuzz = require('../fizz-buzz-tree.js');

describe('FIZZBUZZ', () => {

  it('should successfully return Fizz when the value is divisible by 3',  () => {
    let tree = new binarySearchTree();

    tree.add(3);

    expect(fizzBuzz(tree).root.value).toEqual('Fizz');
  });

  it('should successfully return Buzz when the value is divisible by 5',  () => {
    let tree = new binarySearchTree();

    tree.add(5);

    expect(fizzBuzz(tree).root.value).toEqual('Buzz');
  });

  it('should successfully return FizzBuzz when divisible by 3 and 5',  () => {
    let tree = new binarySearchTree();
    tree.add(15);

    expect(fizzBuzz(tree).root.value).toEqual('FizzBuzz');
  });

  it('should successfully return a string of the value when not divisible by 3 or 5',  () => {
    let tree = new binarySearchTree();
    tree.add(7);

    expect(fizzBuzz(tree).root.value).toEqual('7');
  });


});