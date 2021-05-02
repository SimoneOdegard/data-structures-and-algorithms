'use strict';

const Queue = require('../lib/queue.js');
const Stack = require('../lib/stack.js');

let stack = new Stack();
let queue = new Queue();

describe('** STACK **', () => {

  it('should successfully push onto a stack',  () => {
    let first = 1;
    let second = 2;

    stack.push(first);

    expect(stack.push(second)).toEqual({"0": 1, "1": 2, "head": null, "length": 2});
  });

  it('should successfully push multiple values onto a stack',  () => {
    let first = 1;
    let second = 2;

    stack.push(first);

    expect(stack.push(second)).toEqual({"0": 1, "1": 2, "2": 1, "3": 2, "head": null, "length": 4});
  });

  it('should successfully pop off the stack',  () => {
    let first = 1;
    let second = 2;

    stack.push(first);
    stack.push(second);
    expect(stack.pop()).toEqual(2);
  });

  it('should successfully empty a stack with multiple pops',  () => {
    let first = 1;
    let second = 2;

    stack.push(first);
    stack.push(second);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });

  it('should successfully peek the next item on the stack',  () => {
    let first = 1;
    let second = 2;

    stack.push(first);
    stack.push(second);
    expect(stack.peek()).toEqual(2);
  });

  it('should successfully instantiate an empty stack',  () => {

    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    console.log(stack);

    expect(stack.isEmpty()).toBe(true);
  });

  it('should raise exception when calling pop or peek on an empty stack',  () => {
    stack.pop();

    expect (stack.pop()).toEqual("empty stack");
  });

});

describe('** QUEUE **', () => {

  it('should successfully enqueue into a queue',  () => {
    let first = 1;
    let second = 2;

    queue.enqueue(first);

    expect(queue.enqueue(second)).toEqual({"0": 1, "1": 2, "head": null, "length": 2});
  });

  it('should successfully enqueue multiple values onto a queue',  () => {
    let first = 1;
    let second = 2;

    queue.enqueue(first);

    expect(queue.enqueue(second)).toEqual({"0": 1, "1": 2, "2": 1, "3": 2, "head": null, "length": 4});
  });

  it('should successfully dequeue out of the queue',  () => {
    let first = 1;
    let second = 2;

    queue.dequeue(first);
    queue.dequeue(second);
    expect(queue.dequeue()).toEqual(2);
  });

  it('should successfully dequeue multiple times',  () => {
    let first = 1;
    let second = 2;

    queue.enqueue(first);
    queue.enqueue(second);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(1);
  });

  it('should successfully peek the next item on the queue',  () => {
    let first = 1;
    let second = 2;

    queue.enqueue(first);
    queue.enqueue(second);
    expect(queue.peek()).toEqual(2);
  });

  it('should successfully instantiate an empty queue',  () => {

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    console.log(queue);

    expect(queue.isEmpty()).toBe(true);
  });

  it('should raise exception when calling pop or peek on an empty queue',  () => {
    queue.dequeue();

    expect (queue.dequeue()).toEqual("empty queue");
  });

});