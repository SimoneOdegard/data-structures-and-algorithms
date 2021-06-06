class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  add(val) {
    let node = new Node(val);

    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getList() {
    if (!this.head) return 'no list';

    let current = this.head;

    while(current) {
      console.log(current.val);
      current = current.next;
    }
   }
}

class Hashmap {
  // Hashmaps need:
  // - a predetermined storage mechanism size
  // - which means we also need some type of storage mechanism -> array
  // - a constructor that creates a new mechanism when we make a new hashmap
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) { 
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  set(key, val) {
    let hash = this.hash(key);

    if(!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].add([key, val])
    }
  }

  get(key) {
    let hash = this.hash(key);
    return this.storage[hash];
  }

  contains(key) {
    let hash = this.hash(key);

    if (this.storage[hash] === undefined) {
      return false;
    } else {
      let node = this.storage[hash];
      let current = node.head;
      while (current) {
        if (current.val[0] === key) {
          return true;
        }
      }
    }
  }

}

module.exports = Hashmap;

let hashmap = new Hashmap(4000);

hashmap.set('simone', 'odegard');
hashmap.set('jered', 'odegard');
hashmap.set('solomon', 'thomas');
hashmap.set('christie', 'chen');
hashmap.set('simone', 'mo');

console.log(hashmap.get('simone'));
