'use strict';

const LinkedList = require('./lib/ll.js');

let ll = new LinkedList();

// console.log('empty list', ll);

// ll.insert(10);

// console.log('single item', ll);

// ll.insert(20);
// ll.insert(999);

// console.log('2 items', ll);

// let first = 'a';
// let second = 'b';
// let third = 'c';
// let fourth = 'd';

// ll.append(first);
// ll.append(second);
// ll.append(third);
// ll.insertAfter(second, fourth);
// console.log('insert after', ll.toString());


let a = 'a';
let b = 'b';
let c = 'c';

ll.append(a);
ll.append(c);
ll.insertBefore(a, b);
console.log('==========', ll.toString());