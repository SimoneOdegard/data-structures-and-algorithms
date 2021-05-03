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

  insertBefore(value, newVal) {
    let current = this.head;

    if (this.head.value === value) {
      let node = new Node(newVal);
      node.next = this.head;
      this.head = node;
      return;
    }

    while(current.next) {
      if (current.next.value === value) {
        let node = new Node(newVal);
        node.next = current.next;
        current.next = node;
        return;
      } 
      current = current.next;
    }
  }
  /*
    x loop through our linkedlist to find current.next.value = value
    x if found value, then create a new node for our newVal
    x point our new node/newVal to current.next
    point our value to new node/newVal

    edgecase
    */

  insertAfter(value, newVal) {
    let current = this.head;

    while(current) {
      if (current.value === value) {
        let node = new Node(newVal);
        node.next = current.next;
        current.next = node;
        return;
      } 
      current = current.next;
    }
  }

  get(index = -1) {
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