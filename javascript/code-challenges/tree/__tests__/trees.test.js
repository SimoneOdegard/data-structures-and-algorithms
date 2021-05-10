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
    let bst = new binarySearchTree();

    bst.add(1);

    expect(bst.root.value).toEqual(1);
  });

  it('should successfully instantiate a tree with a single root node',  () => {
    let bst = new binarySearchTree();

    bst.add(3);
    bst.add(5);

    expect(bst).toEqual({"root": {"left": null, "right": {"left": null, "right": null, "value": 5}, "value": 3}});
  });

  it('should successfully add a left child and right child to a single root node',  () => {
    let bst = new binarySearchTree();
    bst.add(10);
    bst.add(2);
    bst.add(5);

    expect(bst).toEqual({"root": {"left": {"left": null, "right": {"left": null, "right": null, "value": 5}, "value": 2}, "right": null, "value": 10}});
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