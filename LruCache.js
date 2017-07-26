class Node {
  constructor(data, key) {
    this.data = data;
    this.key = key;
    this.nextNode = null;
    this.prevNode = null;
  }
}

class LruCache {
  constructor(maxSize = 5) {
    this.store = {};
    this.maxSize = maxSize;
    this.size = 0
    this.head = null
    this.tail = null
  }

  set(key, value){
    this.size ++;
    let newNode = new Node(value, key);

    if (this.size === 1) {
      this.head = newNode;
      this.tail = newNode;
      this.store[key] = newNode;
      return newNode;
    };

    if (this.size > this.maxSize) {
      const oldestKey = this.head.key;
      this.size--;
      this.head = this.head.nextNode;
      this.head.prevNode = null;
      this.store
      delete this.store[oldestKey];
    }

    this.tail.nextNode = newNode;
    newNode.prevNode = this.tail;
    this.tail = newNode;

    this.store[key] = newNode;
  }

  get(key) {
    let result = this.store[key];

    if (result === null) {
      return null;
    }

    if (result.nextNode === null) {
      return result;
    }

    if (result.prevNode) {
      result.prevNode.nextNode = result.nextNode;
      result.nextNode.prevNode = result.prevNode;
    } else {
      this.head = result.nextNode;
      this.head.prevNode = null;
    }

    this.tail.nextNode = result;
    result.prevNode = this.tail;
    result.nextNode = null;
    this.tail = result;

    return result;
  }
}

let lru = new LruCache(3);
lru.set('a', 1);
lru.set('b', 2);
lru.set('c', 3);
lru.get('a');
lru.set('d', 4);
console.log(lru.store);
