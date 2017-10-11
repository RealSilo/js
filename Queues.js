function Queue () {
  this.store = [];
  this.queue = queue;
  this.dequeue = dequeue;
  this.size = size;
  this.front = front;
  this.isEmpty = isEmpty;

  function queue(element) {
    this.store.push(element);
    return this;
  }

  function dequeue() {
    if (this.isEmpty()) {
      return 'The queue is empty.'
    }

    return this.store.shift();
  }

  function size() {
    return this.store.length;
  }

  function front() {
    return this.store[0]
  }

  function isEmpty() {
    return (this.size() === 0);
  }
}

var q = new Queue();
console.log(q.dequeue());
q.queue('cat');
q.queue('dog');
q.queue('horse');
q.dequeue();
console.log(q);
console.log(q.front());
console.log(q.isEmpty());
console.log(q.size());
