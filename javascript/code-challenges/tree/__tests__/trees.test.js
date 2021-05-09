'use strict';

'use strict';

const binaryTree = require('../lib/binaryTree.js');
const binarySearchTree = require('../lib/binarySearchTree.js');
const Node = require('../lib/node.js');

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);

describe('TREES', () => {

  it('should successfully instantiate an empty tree',  () => {
    let first = 1;
    let second = 2;
    pseudo.stack1.push(first);
    pseudo.stack1.push(second);

    pseudo.enqueue(5);

    expect(pseudo.stack1.length).toEqual(3);
  });

  it('should successfully instantiate a tree with a single root node',  () => {

    expect(pseudo.stack1.length).toEqual(3);
  });

  it('should successfully add a left child and right child to a single root node',  () => {

    expect(pseudo.stack1.length).toEqual(3);
  });

  it('should successfully return a collection from a preorder traversal',  () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new binaryTree(one);
    
    expect(tree.preOrder()).toEqual([1, 2, 3, 4, 5]);
  });

  it('should successfully return a collection from a inorder traversal',  () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new binaryTree(one);
    
    expect(tree.inOrder()).toEqual([2, 1, 4, 3, 5]);
  });

  it('should successfully return a collection from a postorder traversal',  () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new binaryTree(one);
    
    expect(tree.postOrder()).toEqual([2, 4, 5, 3, 1]);
  });


});