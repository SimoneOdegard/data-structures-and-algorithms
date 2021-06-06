'use strict';

const Hashmap = require('../hashtable.js');

const hashmap = new Hashmap(5);

hashmap.set('simone', 'odegard');
hashmap.set('simone', 'two');

describe('**Hashtable**', () => {
  it('should adding a key/value to your hashtable', () => {

    expect(hashmap.contains('simone')).toEqual(true);
  });

  it('should return the value stored based on a key', () => {
  
      expect(hashmap.get('simone').head.next.val).toEqual(["simone", "odegard"]);
  });

  it('should returns null for a key that does not exist in the hashtable', () => {
  
      expect(hashmap.get('luna')).toEqual(undefined);
  });

  it('should handle a collision within the hashtable', () => {
  
      expect(hashmap.get('simone')).toEqual({"head": {"next": {"next": null, "val": ["simone", "odegard"]}, "val": ["simone", "two"]}});
  });

  it('should retrieve a value from a bucket within a collision within the hashtable', () => {
  
    expect(hashmap.get('simone').head.next.val).toEqual(["simone", "odegard"]);
  });

  it('should hash a key to an in-range value', () => {
  
    expect(hashmap.hash('evie')).toEqual(0);
  });

});