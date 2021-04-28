'use strict';

const LL = require('./lib/ll-zip.js');

let ll = new LL();
ll.append(1).append(3).append(2);

let ll2 = new LL();
ll2.append(5).append(9).append(4);

console.log(LL.zipLists(ll, ll2));