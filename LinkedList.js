function LinkedList () {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  }

  this.add = function(element) {
    var node = new Node(element);

    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
    return node;
  }

  this.remove = function(element) {
    var currentNode = head;
    var previousNode;
    
    if (currentNode.element === element) {
      head = currentNode.next
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

    length--;
    return currentNode;
  }

  this.addAt = function(index, element) {
    if (index > length) {
      return false;
    }

    var node = new Node(element);
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while(currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      node.next = currentNode;
      previousNode.next = node;
    }

    length++;
    return node;
  }

  this.removeAt = function(index) {
    if (index < 0 || index >= length) {
      return null;
    }

    var currentNode = head;
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

    length--;
    return currentNode;
  }
}

var list = new LinkedList();
list.add('Dog');
list.add('Cat');
list.add('Horse');
console.log(list.size());
console.log(list.head());
list.remove('Cat');
console.log(list.head());
list.addAt(1, 'Mouse');
console.log(list.head());
list.add('Parrot');
list.removeAt(1);
console.log(list.head());
