'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = null;
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
    this.length += 1;
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
    this.length += 1;
    return this;
  }

  // not working
  insertBefore(value, newVal) {
    if (value < 0 || value > this.size)
      return;
    if (value === 0)
      this.insert(newVal);
    else if (value === this.size)
      this.append(newVal);
    else {
      const node = new Node(newVal);
      let prev = null;
      let current = this.head;
      let counter = 0;
      while(counter < value){
        prev = current;
        current = current.next;
        counter++;
      }
      node.next = current;
      prev.next = node;
      this.size++;
    }
  }

  // insertBefore(value, newVal) {
  //   let thisNode = this.head;
  //   let node = new Node(value);
  //   let previousNode;
  //   let currentIndex = 0;

  //   if(!this.head) {
  //     this.head = node;
  //   } else {
  //     while(currentIndex < value){
  //       currentIndex++;
  //       previousNode = thisNode;
  //       thisNode = thisNode.next;
  //     }
  //     node.next = thisNode;
  //     previousNode.next = node;
  //   }
  //   length++;
  // }

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

  get(index = -1){
    if (index < 0 || index >= this.length) return null

    let current = this.head

    for (let i = 0; i < index; i++) {
      current = current.next
    }

    return current.value;
  }

  kthFromEnd(k = 0) {
    if (k < 0) return null;

    return this.get(this.length - 1 - k);
  }

}

module.exports = LinkedList;