'use strict';

const binaryTree = require('./lib/binaryTree.js');
const binarySearchTree = require('./lib/binarySearchTree.js');
const Node = require('./lib/node.js');

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);

one.left = two;
one.right = three;
three.left = four;
three.right = five;


let tree = new binaryTree(one);

let bst = new binarySearchTree();

// testing traversals
console.log('my binary tree:', tree.findMaximumValue());

bst.add(10);
bst.add(3);
bst.add(16);
bst.add(17);
// bst.contains(3);


// console.log('binary search tree', bst.findMaximumValue());