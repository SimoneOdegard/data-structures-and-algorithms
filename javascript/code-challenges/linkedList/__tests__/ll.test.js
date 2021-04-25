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
});