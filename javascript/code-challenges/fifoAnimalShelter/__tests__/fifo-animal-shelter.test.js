'use strict';

const AnimalShelter = require('../lib/fifo-animal-shelter.js');
const Animal = require('../lib/animal.js');
const Queue = require('../lib/queue.js');

const newAnimal1 = new Animal('cat', 'Luna');
const newAnimal2 = new Animal('dog', 'Bella');
const badAnimal = new Animal('goat', 'Bucky');
let shelter = new AnimalShelter();

describe('** STACK **', () => {

  it('should enqueue a cat into the AnimalShelter',  () => {
    shelter.enqueue(newAnimal1);

    expect(shelter).toEqual({"cat": {"0": {"name": "Luna", "type": "cat"}, "head": null, "length": 1}, "dog": {"head": null, "length": 0}, "head": null, "length": 0});
  });

  it('should enqueue a dog into the AnimalShelter',  () => {
    shelter.enqueue(newAnimal2);

    expect(shelter).toEqual({"cat": {"0": {"name": "Luna", "type": "cat"}, "head": null, "length": 1}, "dog": {"0": {"name": "Bella", "type": "dog"}, "head": null, "length": 1}, "head": null, "length": 0});
  });

  it('should not allow other animal type to enqueue',  () => {
    shelter.enqueue(badAnimal);

    expect(shelter).toEqual({"cat": {"0": {"name": "Luna", "type": "cat"}, "head": null, "length": 1}, "dog": {"0": {"name": "Bella", "type": "dog"}, "head": null, "length": 1}, "head": null, "length": 0});
  });

  it('should dequeue a cat into the AnimalShelter',  () => {
    shelter.dequeue('cat');

    expect(shelter).toEqual({"cat": {"head": null, "length": 0}, "dog": {"0": {"name": "Bella", "type": "dog"}, "head": null, "length": 1}, "head": null, "length": 0});
  });

  it('should dequeue a dog into the AnimalShelter',  () => {
    shelter.dequeue('dog');

    expect(shelter).toEqual({"cat": {"head": null, "length": 0}, "dog": {"head": null, "length": 0}, "head": null, "length": 0});
  });

  it('should not dequeue another animal type',  () => {
    shelter.dequeue('goat');

    expect(shelter).toEqual({"cat": {"head": null, "length": 0}, "dog": {"head": null, "length": 0}, "head": null, "length": 0});
  });

});