'use strict';

const leftJoin = require('../left-join.js');
const Hashmap = require('../../hashtable/hashtable.js');

let syn = new Hashmap(1000);

syn.set('fond', 'enamored');
syn.set('wrath', 'anger');
syn.set('diligent', 'employed');
syn.set('outfit', 'garb');
syn.set('guide', 'usher');

let ant = new Hashmap(1000);

ant.set('fond', 'averse');
ant.set('wrath', 'delight');
ant.set('diligent', 'idle');
ant.set('guide', 'follow');
ant.set('flow', 'jam');

describe('**LEFT JOIN**', () => {
  it('should add ant to syn when it matches the key.', () => {

    expect(leftJoin(syn, ant)).toEqual([
      [ 'fond', 'enamored', 'averse' ],
      [ 'diligent', 'employed', 'idle' ],
      [ 'wrath', 'anger', 'delight' ],
      [ 'guide', 'usher', 'follow' ]]);
  });

});