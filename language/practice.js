function isEven(n) {
  if (n === 0) {
    return true;
  }
  else if (n === 1) {
    return false;
  }
  else {
    return isEven(n - 2);
  }
}

isEven(5);

Array.prototype.myMap = function(callback) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
}

var doubled = [1,2,3].myMap(function(n) {
  return n ** 2;
});

console.log(doubled);


function rot13(str) { // LBH QVQ VG!
  
  var splitStr = str.split('');

  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i] !== ' ') {
      splitStr[i] = splitStr[i].charCodeAt() + 13;
      if (splitStr[i] > 90) {
        splitStr[i] -= 26;
      }
      splitStr[i] = String.fromCharCode(splitStr[i]);
    }
  }
  
  return splitStr.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));

