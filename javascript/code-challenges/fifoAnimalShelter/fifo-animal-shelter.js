'use strict';

const AnimalShelter = require('./lib/fifo-animal-shelter.js');
const Animal = require('./lib/animal.js');

const newAnimal1 = new Animal('cat', 'Luna');
const newAnimal2 = new Animal('dog', 'Bella');
const newAnimal3 = new Animal('dog', 'Pepper');
const badAnimal = new Animal('goat', 'Bucky');
const shelter = new AnimalShelter();

shelter.enqueue(newAnimal1);
shelter.enqueue(newAnimal2);
// shelter.enqueue(newAnimal3);

// shelter.enqueue(badAnimal);

shelter.dequeue('dog');
console.log(shelter);