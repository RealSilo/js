class Queue {
  constructor() {
    this.store = [];
  }

  queue(element) {
    this.store.push(element);
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'The queue is empty.'
    }

    return this.store.shift();
  }

  size() {
    return this.store.length;
  }

  isEmpty() {
    return (this.size() === 0);
  }

  front() {
    return this.store[0];
  }
}

let q = new Queue();
console.log(q.dequeue());
q.queue('cat');
q.queue('dog');
q.queue('horse');
q.dequeue();
console.log(q);
console.log(q.front());
console.log(q.isEmpty());
console.log(q.size());
