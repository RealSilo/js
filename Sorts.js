function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowestIndex = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestIndex]) {
        lowestIndex = j;
      }
    }

    if (lowestIndex !== i) {
      [arr[i], arr[lowestIndex]] = [arr[lowestIndex], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([2,4,12,3,1,5]));

function bubbleSort(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j <= i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      } 
    }
  }

  return arr;
}

console.log(bubbleSort([7,1,3,12,18,9]));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const merge = function(left, right) {
    if (left.length === 0) {
      return right;
    }

    if (right.length === 0) {
      return left;
    }

    if (left[0] < right[0]) {
      return [left[0]].concat(merge(left.slice(1), right));
    } else {
      return [right[0]].concat(merge(left, right.slice(1)));
    }
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  if (left[left.length -1] <= right[0]) {
    return left.concat(right);
  } else {
    return merge(left, right);
  }
}

console.log(mergeSort([1,5,11,8,2,9,7]));

function quickSort(arr) {

  const partition = function(arr, first, last) {
    let pivot = arr[first];
    let left_mark = first + 1;
    let right_mark = last;

    let done = false;
  }
}