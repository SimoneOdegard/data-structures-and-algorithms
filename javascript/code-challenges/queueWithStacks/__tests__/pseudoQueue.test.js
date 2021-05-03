'use strict';

const PseudoQueue = require('../lib/pseudoQueue.js');
const Queue = require('../lib/queue.js');
const Stack = require('../lib/stack.js');

let stack = new Stack();
let queue = new Queue();
let pseudo = new PseudoQueue();

describe('** STACK **', () => {

  it('should enqueue into a stack in PseudoQueue',  () => {
    let first = 1;
    let second = 2;
    pseudo.stack1.push(first);
    pseudo.stack1.push(second);

    pseudo.enqueue(5);

    expect(pseudo.stack1.length).toEqual(3);
  });

  it('should dequeue into a stack in PseudoQueue',  () => {
    let first = 1;
    let second = 2;
    pseudo.stack1.push(first);
    pseudo.stack1.push(second);

    expect(pseudo.dequeue()).toEqual(5);
  });

});