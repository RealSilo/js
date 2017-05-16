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

