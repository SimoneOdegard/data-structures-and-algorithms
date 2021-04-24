'use strict';

const LinkedList = require('./lib/ll.js');

let ll = new LinkedList();

console.log('empty list', ll);

ll.insert(10);

console.log('single item', ll);

ll.insert(20);
ll.insert(999);

console.log('2 items', ll);

console.log(ll.includes(999));