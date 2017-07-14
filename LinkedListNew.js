require('babel-register')({
   presets: [ 'es2015' ]
});

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(element) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length++;
    return node;
  }

  remove(element) {
    let currentNode = this.head;
    let previousNode;

    if (currentNode.element == element) {
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        if (currentNode.next === null) {
          return 'No such element';
        }

        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    this.length++;
    return currentNode;
  }

  addAt(index, element) {
    const node = new Node(element);

    if (index < 0 || index > this.length) {
      return false;
    }

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      node.next = currentNode;
      previousNode.next = node;
    }

    this.length++;
    return node;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      previousNode.next = currentNode.next;
    }

    this.length--;
    return currentNode;
  }
}

let list = new LinkedList();
list.add('Dog');
list.add('Cat');
list.add('Horse');
console.log(list.length);
console.log(list.head);
list.remove('Cat');
console.log(list.head);
list.addAt(1, 'Mouse');
console.log(list.head);
list.add('Parrot');
list.removeAt(1);
console.log(list.head);
