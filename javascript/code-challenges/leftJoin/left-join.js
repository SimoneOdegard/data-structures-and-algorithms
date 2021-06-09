'use strict';

const Hashmap = require('../hashtable/hashtable.js');

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

function leftJoin(hashmap1, hashmap2) {
  let results = [];
  for (let i = 0; i < hashmap1.storage.length; i++) {
    // console.log(hashmap1.storage[i]);
    if (hashmap1.storage[i]) {
      let newArr = hashmap1.storage[i].head.val;
      // console.log(newArr);
      for (let j = 0; j < hashmap2.storage.length; j++) {
        if (hashmap2.storage[j]) {
          if (hashmap1.storage[i].head.val[0] === hashmap2.storage[j].head.val[0]) {
            newArr.push(hashmap2.storage[j].head.val[1]);
            // console.log(newArr);
            results.push(newArr);
          } 
        }
      }
    }
  }
  return results;
}


console.log(leftJoin(syn, ant))

module.exports = leftJoin;