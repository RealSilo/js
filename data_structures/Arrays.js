// reverse a string 'abcd' => 'dcba'
const reverseRecursive = (string) => {
  if (string.length <= 1) {
    return string;
  }
  return string.slice(-1) + reverseRecursive(string.slice(0, -1));
};

console.log(reverseRecursive('abcd'));

const reverseIterative = (string) => {
  let reversed = '';
  let char;
  let updatedString = string;

  while (updatedString.length > 0) {
    char = updatedString.slice(-1);
    reversed = reversed.concat(char);
    updatedString = updatedString.slice(0, -1);
  }

  return reversed;
};

console.log(reverseIterative('abcd'));

const reverseBuiltin = (string) => {
  return string.split('').reverse().join('');
};

console.log(reverseBuiltin('abcd'));
