'use strict';

const binarySearchTree = require('../tree/lib/binarySearchTree.js');
const node = require('../tree/lib/node.js');

function fizzBuzzTree(tree) {
  if(!tree.root) {
    return null;
  }
  let results = tree;
  
    let _walk = node => {
      if (node.value % 15 == 0) {
        node.value = 'FizzBuzz';
      } else if (node.value % 3 == 0) {
        node.value = 'Fizz';
      } else if (node.value % 5 == 0) {
        node.value = 'Buzz';
      } else {
        node.value = node.value.toString();
      }
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }
    _walk(results.root);
    return results;
}

// let tree = new binarySearchTree();

// tree.add(15);
// tree.add(3);
// tree.add(26);
// tree.add(5);

// console.log('tree', fizzBuzzTree(tree));

module.exports = fizzBuzzTree;