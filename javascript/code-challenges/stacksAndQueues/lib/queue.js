'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  enqueue(value) {
    this[this.length] = value;
    this.length++;
    
    return this;
  }

  dequeue() {
    if (this.length === 0) return 'empty queue';

    let result = this[--this.length];

    delete this[this.length];
    return result;
  }

  peek() {
    if (this.length === 0) return 'empty queue';

    let result = this[--this.length];

    return result;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Queue;