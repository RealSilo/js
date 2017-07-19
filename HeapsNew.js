require('babel-register')({
   presets: [ 'es2015' ]
});

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  add(value) {
    this.heap.push(value);

    let idx = this.heap.length - 1;
    
    while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
      if (idx === 1) {
        return;
      }

      [this.heap[idx], this.heap[Math.floor(idx / 2)]] = [this.heap[Math.floor(idx / 2)], this.heap[idx]];
      
      idx = Math.floor(idx / 2);
    }
  }

  remove() {
  // We are always removing the top node
    let smallest = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap.pop();

      if(this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }

        return smallest;
      }

      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;

        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.pop();
    } else {
      return null
    }

    return smallest;
  }

  heapSort() {
    let result = [];

    while(this.heap.length > 1) {
      result.push(this.remove());
    }

    return result;
  }
}

minHeap = new MinHeap();
minHeap.add(20);
console.log(minHeap.heap);
minHeap.add(40);
console.log(minHeap.heap);
minHeap.add(10);
console.log(minHeap.heap);
minHeap.add(30);
console.log(minHeap.heap);
minHeap.remove();
console.log(minHeap.heap);
minHeap.remove();
console.log(minHeap.heap);
minHeap.remove();
console.log(minHeap.heap);
minHeap.remove();
console.log(minHeap.heap);
minHeap.remove();
console.log(minHeap.heap);

class MaxHeap {
  constructor() {
    this.heap = [null]
  }

  add(value) {
    this.heap.push(value);

    let idx = this.heap.length - 1;

    while (this.heap[idx] > this.heap[Math.floor(idx / 2)]) {
      if (idx === 1) {
        return;
      }

      [this.heap[idx], this.heap[Math.floor(idx / 2)]] = [this.heap[Math.floor(idx / 2)], this.heap[idx]];

      idx = Math.floor(idx / 2);
    }
  }

  remove() {
    let largest = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap.pop();

      if (this.heap.length === 3) {
        if (this.heap[1] < this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }

        return largest;
      }

      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      while (this.heap[i] < this.heap[left] || this.heap[i] < this.heap[right]) {
        if (this.heap[left] > this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }

        left = 2 * i;
        right = 2 * i + 1;

        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.pop();
    } else {
      return null;
    }

    return largest;
  }
}

maxHeap = new MaxHeap();
maxHeap.add(20);
maxHeap.add(30);
maxHeap.add(40);
maxHeap.add(25);
maxHeap.add(50);
console.log(maxHeap.heap);
maxHeap.remove();
console.log(maxHeap.heap);
maxHeap.remove();
console.log(maxHeap.heap);

