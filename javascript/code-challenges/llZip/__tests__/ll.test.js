'use strict';

const LL = require('../lib/ll-zip.js');

describe('**Linked List**', () => {

  it('should zip the two lists together',  () => {
    let ll = new LL();
    ll.append(1).append(3).append(2);

    let ll2 = new LL();
    ll2.append(5).append(9).append(4);

    expect(LL.zipLists(ll, ll2).toString()).toEqual("{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL");
    console.log(LL.zipLists(ll, ll2));
  });


});