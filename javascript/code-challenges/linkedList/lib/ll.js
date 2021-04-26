'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }


  insert(value){
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
    return this;
  }

  includes(val) {
    let thisNode = this.head;
 
    while(thisNode) {
      if(thisNode.value === val) {
        return true;
      }
      thisNode = thisNode.next;
    }
    return false;
  }

  toString() {
    let thisNode = this.head;
    let string = '';

    while (thisNode) {
      string += `{ ${thisNode.value} } -> `
      if (thisNode.next === null){string += `NULL`} 
      thisNode = thisNode.next;
    }
    return string;
  }

  append(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
    return this;
  }

  // not working
  insertBefore(value, newVal) {
    let thisNode = this.head;
    let node = new Node(value);
    let previousNode;
    let currentIndex = 0;

    if(!this.head) {
      this.head = node;
    } else {
      while(currentIndex < value){
        currentIndex++;
        previousNode = thisNode;
        thisNode = thisNode.next;
      }
      node.next = thisNode;
      previousNode.next = node;
    }
    length++;
  }

  // not working
  insertAfter(value, newVal) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
    return this;
  }

}

module.exports = LinkedList;