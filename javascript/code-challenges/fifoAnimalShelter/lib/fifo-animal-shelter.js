'use strict';

const Node = require('./node.js');
const Queue = require('./queue.js');

class AnimalShelter {
  constructor() {
    this.head = null;
    this.length = 0;
    this.cat = new Queue();
    this.dog = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'cat') {
      this.cat.enqueue(animal);
    }
    if (animal.type === 'dog') {
      this.dog.enqueue(animal);
    } else {
      return null;
    }
  }

  dequeue(pref) {
    if (pref === 'cat') {
      this.cat.dequeue();
    }
    if (pref === 'dog') {
      this.dog.dequeue();
    } else {
      return null;
    }
  }

}

module.exports = AnimalShelter;