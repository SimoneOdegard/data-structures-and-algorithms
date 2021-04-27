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

  kthFromEnd(k) {
    // start at end position?
    // move current position to left the number of nodes based on input
    // return value of node

    if (!this.head || k < 1) {
      return undefined;
    }

    let current = this.head;
    let nBehindCurrent = this.head;

    for (let i = 0; i < k - 1; i++) {
      current = current.next;
      if (!current) {
        return undefined;
      }
    }

    while (typeof current.next !== 'undefined') {
      nBehindCurrent = nBehindCurrent.next;
      current = current.next;
    }
    return nBehindCurrent;
  }

  // kthFromEnd(k) {
  //   let node = this.head;
  //   let count = 1;
  //   let kthNode;

  //   if(k<=0) return;

  //   while(node){
  //     if (count == k) kthNode = this.head;
  //     else if(count-k>0){
  //       kthNode = kthNode.next;
  //     }
  //     count++;
  //     node = node.next;
  //   }
  //   return kthNode;
  // }

}

module.exports = LinkedList;