'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
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
    this.length += 1
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
    this.length += 1
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

  static zipLists(list1, list2) {
    let newList = new LinkedList();
    let count = list1.length > list2.length ? list1.length : list2.length;

    for (let i = 0; i < count; i++) {

      if (list1.get(i)) {
        newList.append(list1.get(i));
      }
      if (list2.get(i)) {
        newList.append(list2.get(i));
      }
    }
    return newList;
  }
}

module.exports = LinkedList;