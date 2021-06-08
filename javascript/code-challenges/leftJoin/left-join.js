'use strict';

const Hashmap = require('../hashtable/hashtable.js');

let syn = new Hashmap(15);

syn.set('fond', 'enamored');
syn.set('wrath', 'anger');
syn.set('diligent', 'employed');
syn.set('outfit', 'garb');
syn.set('guide', 'usher');

let ant = new Hashmap(15);

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
      let arr = hashmap1.storage[i].head.val;
      // let key = hashmap1.storage[i].head.val[0];
      // console.log(key);
      for (let j = 0; j < hashmap2.storage.length; i++) {
        if (hashmap2.storage[j]) {
          if (hashmap1.storage[i].head.val[0] === hashmap2.storage[j].head.val[0])
          arr.push(hashmap2.storage[j].head.val[1]);
          results.push(arr);
        }
      }
    }
  }
  return results;
}


console.log(leftJoin(syn, ant))