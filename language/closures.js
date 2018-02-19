function filterArray(array, predicate) {
  let result = [];
  array.forEach(item => {
    if (predicate(item)) {
      result.push(item);
    }
  });

  return result;
}

let array = [1,2,3,4,5,6,7]

var result = filterArray(array, function(item){
  return item < 4;
});

console.log(result);
console.log('haa');

function lessThanFilter(lessThan) {
  return function(item) {
    return item < lessThan;
  };
}

var lessThanFive = lessThanFilter(5);
console.log(lessThanFive(3));
console.log(filterArray(array, lessThanFilter(4)));

phantom.exit();