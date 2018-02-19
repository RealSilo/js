function LinkedList () {
  this.length = 0;
  this.head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.add = function(element) {
    var node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      var currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length++;
    return node;
  }

  this.remove = function(element) {
    var currentNode = this.head;
    var previousNode;
    
    if (currentNode.element === element) {
      this.head = currentNode.next
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

    this.length--;
    return currentNode;
  }

  this.addAt = function(index, element) {
    if (index > this.length) {
      return false;
    }

    var node = new Node(element);
    var currentNode = this.head;
    var previousNode;
    var currentIndex = 0;

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while(currentIndex < index) {
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

  this.removeAt = function(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    var currentNode = this.head;
    var previousNode;
    var currentIndex = 0;

    if (index === 0) {
      head = currentNode.next;
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

var list = new LinkedList();
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
