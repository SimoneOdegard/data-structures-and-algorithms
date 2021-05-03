'use strict';

const PseudoQueue = require('./lib/pseudoQueue.js');
const Stack = require('./lib/stack.js');
const Queue = require('./lib/queue.js');

let pseudo = new PseudoQueue ();
let stack = new Stack();
let queue = new Queue();

let stack1 = new Stack();
let first = 1;
let second = 2;
pseudo.stack1.push(first);
pseudo.stack1.push(second);

let stack2 = new Stack();
let third = 3;
let fourth = 4;
pseudo.stack2.push(third);
pseudo.stack2.push(fourth);

pseudo.enqueue();
console.log('======', pseudo);
