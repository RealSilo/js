// reverse a string 'abcd' => 'dcba'
const reverseRecursive = (string) => {
  if (string.length <= 1) {
    return string;
  }
  return string.slice(-1) + reverseRecursive(string.slice(0, -1));
};

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

const reverseBuiltin = (string) => {
  return string.split('').reverse().join('');
};

const isPalindromeRecursive = (string) => {
  if (string.length <= 1) {
    return true;
  };

  return string[0] === string.slice(-1) && isPalindromeRecursive(string.slice(1, -1))
};

const isPalindromeIterative = (string) => {
  if (string.length <= 1) {
    return true;
  };

  let updatedString = string;

  while (updatedString.length > 1) {
    if (updatedString[0] !== updatedString.slice(-1)) {
      return false;
    }

    updatedString = updatedString.slice(1, -1);
  };

  return true;
};

const isPalindromeBuiltin = (string) => {
  const reversed = string.split('').reverse.join('');

  return string === reversed;
};
