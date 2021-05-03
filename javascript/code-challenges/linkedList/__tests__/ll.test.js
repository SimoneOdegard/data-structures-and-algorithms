'use strict';

const LL = require('../lib/ll.js');

describe('**Linked List**', () => {
  it('should create an empty LL on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should add a node to the list',  () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.insert(first);
    expect(list.head.value).toEqual(1);

    list.insert(second);
    list.insert(3);
    list.insert(4);

    console.log(list);
  });

  it('should properly point to the first node in the linked list',  () => {
    let list = new LL();
    let first = 1;

    list.insert(first);
    expect(list.head.value).toEqual(1);
  });

  it('should add multiple nodes to the list',  () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.insert(first);
    expect(list.head.value).toEqual(1);

    list.insert(second);
    expect(list.head.next).toEqual({"next": null, "value": 2});
  });

  it('should return true when finding a value within the linked list that exists',  () => {
    let list = new LL();
    let first = 1;

    list.insert(first);
    expect(list.includes(1)).toBe(true);
  });

  it('should return false when finding a value within the linked list that does not exist',  () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.insert(first);
    expect(list.includes(2)).toBe(false);
  });

  it('should return a collection of all the values that exist in the linked list',  () => {
    let list = new LL();
    let a = 1;
    let b = 2;
    let c = 3;

    list.insert(a);
    list.insert(b);
    list.insert(c);
    expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');

  });

  it('should add a node to the end of the linked list',  () => {
    let list = new LL();
    let first = 1;
    let last = 5;

    list.insert(first);
    list.append(last);
    expect(list.head.next.value).toEqual(5);

    // console.log('append list', list);
  });

  it('should add multiple nodes to the end of a linked list',  () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;

    list.insert(first);
    list.append(second);
    list.append(third);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);

    // console.log('multiple added to list', list);
  });

  it('should insert a node before a node located in the middle of a linked list',  () => {
    let list = new LL();
    let first = 'a';
    let second = 'b';
    let third = 'c';

    list.append(first);
    list.append(third);
    list.insertBefore(third, second);
    expect(list.toString()).toBe('{ a } -> { b } -> { c } -> NULL');

    // console.log('insertBefore list', list);
    
  });

  it('should insert a node before the first node of a linked list',  () => {
    let list = new LL();
    let first = 'a';
    let second = 'b';

    list.append(first);
    list.insertBefore(first, second);
    expect(list.toString()).toBe('{ b } -> { a } -> NULL');
  });

  it('should insert after a node in the middle of the linked list',  () => {
    let list = new LL();
    let first = 'a';
    let second = 'b';
    let third = 'c';

    list.append(first);
    list.append(third);
    list.insertAfter(first, second)
    expect(list.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
  });

  it('should insert a node after the last node of the linked list',  () => {
    let list = new LL();
    let first = 'a';
    let second = 'b';
    let third = 'c';

    list.append(first);
    list.append(third);
    list.insertAfter(third, second)
    expect(list.toString()).toBe('{ a } -> { c } -> { b } -> NULL');
  });

  /* === kthFromEnd === */
  it('should not work when k is greater than the length of the linked list',  () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;
    let fourth = 4;
    
    list.append(first);
    list.append(second);
    list.append(third);
    list.append(fourth);
    expect(list.kthFromEnd(1)).toEqual(3);
    // console.log('***KTHNODE***', list);
  });

  it('should return null when k is the same as the link list length',  () => {
    let list = new LL();
    let first = 1;
    
    list.append(first);
    expect(list.kthFromEnd(1)).toEqual(null);
  });

  it('should not work when k is not a positive integer',  () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    
    list.append(first);
    list.append(second);
    expect(list.kthFromEnd(-1)).toEqual(null);
  });
  
  it('should return null when the linked list is the length of 1',  () => {
    let list = new LL();
    let first = 1;
    
    list.append(first);
    expect(list.kthFromEnd(1)).toEqual(null);
  });

  it('should work when k is somewhere in the middle of a linked list',  () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;
    let fourth = 4;
    
    list.append(first);
    list.append(second);
    list.append(third);
    list.append(fourth);
    expect(list.kthFromEnd(2)).toEqual(2);
  });


});