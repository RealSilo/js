function quickSelect(arr, nth) {
  const partition = function(arr, nth, first, last) {
    let pivotValue = arr[first];
    let leftMark = first + 1;
    let rightMark = last;

    let done = false;

    while (done === false) {
      while (leftMark <= rightMark && arr[leftMark] <= pivotValue) {
        leftMark++;
      }

      while (leftMark <= rightMark && arr[rightMark] >= pivotValue) {
        rightMark--;
      }

      if (leftMark > rightMark) {
        done = true;
      } else {
        [arr[leftMark], arr[rightMark]] = [arr[rightMark], arr[leftMark]];
      }
    }

    [arr[first], arr[rightMark]] = [arr[rightMark], arr[first]];

    if (nth < rightMark) {
      partition(arr, nth, first, rightMark - 1)
    } else if (nth > rightMark) {
      partition(arr, nth, rightMark + 1, last)
    } else {
      return arr[nth]
    }
  }

  return partition(arr, nth - 1, 0, arr.length - 1);
}

console.log(quickSelect([3,6,8,2,4,1], 3));