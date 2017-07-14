require('babel-register')({
   presets: [ 'es2015' ]
});

class Stack {
  constructor() {
    this.length = 0;
    this.store = [];
  }

  push(element) {
    this.store.push(element);
    this.length++;
    return this;
  }

  pop() {
    const removed = this.store.pop();
    this.length--;
    return removed;
  }

  peek() {
    return [...this.store].pop();
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.peek());
stack.pop();
console.log(stack);
console.log(stack.peek());
console.log(stack);
