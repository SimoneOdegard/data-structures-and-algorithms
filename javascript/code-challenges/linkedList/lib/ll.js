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

    // format "{ a } -> { b } -> { c } -> NULL"

  }
}

module.exports = LinkedList;