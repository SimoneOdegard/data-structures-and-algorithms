'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // data, left, right
  preOrder() {
    let results  = [];
    let _walk = node => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }
    _walk(this.root);
    return results;
  }

  // left, data, right
  inOrder() {
    let results = [];
    let _walk = node => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    }
    _walk(this.root);
    return results;
  }

  // left, right, data
  postOrder() {
    let results = [];
    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    }
    _walk(this.root);
    return results;
  }

  findMaximumValue() {
    let node = this.root;
    if (node) {
      while (node.right) {
        node = node.right;
      }
      return node.value;
    }
    return null;
  }

}

module.exports = BinaryTree;