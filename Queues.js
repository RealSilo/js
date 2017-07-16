function Queue () {
  this.store = [];

  this.queue = function(element) {
    this.store.push(element);
    return this;
  }

  this.dequeue = function() {
    if (this.isEmpty()) {
      return 'The queue is empty.'
    }

    return this.store.shift();
  }

  this.size = function() {
    return this.store.length;
  }

  this.front = function() {
    return this.store[0]
  }

  this.isEmpty = function() {
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
