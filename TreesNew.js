require('babel-register')({
   presets: [ 'es2015' ]
});

class Node {
  constructor(data, parent = null, left = null, right = null) {
    this.data = data;
    this.parent = parent
    this.left = left;
    this.right = right;
  }

  isLeaf() {
    return this.left === null && this.right === null;
  }

  isRoot() {
    return this.parent === null;
  }

  hasBothChildren() {
    return this.left !== null && this.right !== null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data, node);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data, node);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }

      return searchTree(node);
    }
  }

  find(data) {
    let current = this.root

    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) {
        return null;
      }
    }

    return current;
  }

  removeWithParent(data) {
    const removeNode = (node, data) => {
      // if it's an empty tree we return null
      if (node == null) {
        return null;
      }

      if (data == node.data) {
        let parentNode = node.parent;
        // if node has no child
        if (node.left == null && node.right == null) {
          if (parentNode.left.data === node.data) {
            parentNode.left = null;
          } else {
            parentNode.right = null;
          }

          return node;
        }

        if (node.left == null) {
          if (parentNode.left.data === node.data) {
            parentNode.left = node.right;
          } else {
            parentNode.right = node.right;
          }

          return node;
        }

        if (node.right == null) {
          if (parentNode.left.data === node.data) {
            parentNode.left = node.left;
          } else {
            parentNode.right = node.left;
          }

          return node;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        removeNode(node.right, tempNode.data);
      } else {
        if (data < node.data) {
          removeNode(node.left, data);
        } else {
          removeNode(node.right, data);
        }
      }
    }
    removeNode(this.root, data);
  }

  removeWithNoParent(data) {
    const removeNode = (node, data) => {
      if (node == null) {
        return null;
      }

      if (data < node.data && node.left) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data && node.right) {
        node.right = removeNode(node.right, data);
      } else if (data === node.data) {
        if (node.left && node.right) {
          // if there are both left and right children the data is replaced with the
          // min value of the right branch then the node with that value is deleted
          node.data = this.findMin(node.right);
          node.right = removeNode(node.right, node.data);
        } else {
          // if there is only left child => node removed and replaced with node.left
          // if there is only right child => node removed and replaced with node.right
          // it's good because the reference to the parent is untouched
          // if there is no left/right child it's simply set to null
          node = node.left || node.right;
        }
      } else {
        // if the value is not found in the tree we null is returned
        return null;
      }
      // we have to return the node to be able to handle the references
      // When calling the function recursively the last call (which doesn't call
      // the function again) will set node to node.left || node.right then sends
      // back that node to the last recursive call so the reference is still working.
      return node;
    }
    removeNode(this.root, data);
  }

  isPresent(data) {
    let current = this.root

    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) {
        return false;
      }
    }

    return true;
  }

  findMin(node) {
    let current = node;

    if (current === null) {
      return null;
    }

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  findMax(node) {
    let current = node;

    if (current === null) {
      return null;
    }

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  isBalanced() {
    return (this.minHeight() >= this.maxHeight() - 1)
  }

  minHeight(node = this.root) {
    if (node === null) {
      return -1;
    }

    const left = this.minHeight(node.left);
    const right = this.minHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  maxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }

    const left = this.maxHeight(node.left);
    const right = this.maxHeight(node.right)

    if (left < right) {
      return right + 1;
    } else {
      return left + 1;
    }
  }

  inOrder(node = this.root) {
    if (node === null) {
      return null
    }

    let result = [];

    const traverseInOrder = (node) => {
      node.left && traverseInOrder(node.left);
      result.push(node.data);
      node.right && traverseInOrder(node.right);
    }

    traverseInOrder(node);

    return result;
  }

  preOrder(node = this.root) {
    if (node === null) {
      return null;
    }

    let result = [];

    const traversePreOrder = (node) => {
      result.push(node.data);
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    }

    traversePreOrder(node);

    return result;
  }

  postOrder(node = this.root) {
    if (node === null) {
      return null;
    }

    let result = [];

    const traversePostOrder = (node) => {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.data);
    }

    traversePostOrder(node);

    return result;
  }

  levelOrder(startNode, = this.root) {
    if (startNode === null) {
      return null;
    }

    let result = [];
    let queue = [];

    queue.push(startNode);

    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node.data);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right)
      }
    }

    return result;
  }
}

const bst = new BST();
bst.add(20);
bst.add(10);
bst.add(30);
// console.log(bst.findMax());
// let node = bst.find(30);
// console.log(node.isLeaf());
// console.log(bst.find(35));
// console.log(bst.isPresent(30));
// console.log(bst.isPresent(35));
bst.add(25);
bst.add(40);
bst.add(35);
bst.add(50);
bst.removeWithNoParent(50);

console.log(bst);
// console.log(bst.minHeight());
// console.log(bst.maxHeight());
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
// console.log(bst.find(35).right);
// console.log(bst.findMin(bst.root));
// console.log(bst.find(20).right);
// console.log(bst.findMax());
