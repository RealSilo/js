var Stack = function() {
  this.length = 0;
  this.store = [];

  this.push = function(element) {
    this.store.push(element);
    this.length++;
    return this;
  }

  this.pop = function() {
    if (this.length === 0) {
      return 'The stack is empty';
    }

    var removed = this.store.pop();
    this.length--;
    return removed;
  }

  this.peek = function() {
    return this.store[this.length - 1];
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.peek());
stack.pop();
console.log(stack);
console.log(stack.peek());
