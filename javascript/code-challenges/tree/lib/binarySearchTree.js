'use strict';

const Node = require('./node.js');
const binaryTree = require('./binaryTree.js');

class BinarySearchTree {
  constructor (root = null){
    this.root = root;
  }

  add(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else this.addNode (this.root, newNode);
  }

  addNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  contains(value) {
    return this.containsNode (this.root, value);
  }

  containsNode(node, value) {
    if (node == null) {
      return false;
    } else if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.containsNode(node.left, value);
    } else if (value > node.value) {
      return this.containsNode(node.right, value);
    }
  }

}

module.exports = BinarySearchTree;