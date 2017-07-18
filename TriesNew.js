require('babel-register')({
   presets: [ 'es2015' ]
});

class Node {
  constructor() {
    this.hash = new Map();
    this.end = false;
    this.data = null;
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }

  setData(data) {
    this.data = data;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(input, data, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      node.setData(data);
      return;
    } else if (!node.hash.has(input[0])) {
      node.hash.set(input[0], new Node());
      this.add(input.substr(1), data, node.hash.get(input[0]));
    } else {
      this.add(input.substr(1), data, node.hash.get(input[0]));
    }
  }

  isWord(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.hash.has(word[0])) {
        return false;
      } else {
        node = node.hash.get(word[0]);
        word = word.substr(1);
      }
    }

    if (node.hash.has(word) && node.hash.get(word).isEnd()) {
      return true;
    } else {
      return false;
    }
  }

  print() {
    let words = [];
    const collect = (node, string) => {
      if (node.hash.size !== 0) {
        for (let letter of node.hash.keys()) {
          collect(node.hash.get(letter), string.concat(letter));
        }

        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    }
    collect(this.root, new String());
    return words.length > 0 ? words : null;
  }

  find(word, node = this.root) {
    if (word.length === 0 && node.isEnd()) {
      return node.data;
    } else if (word.length === 0) {
      return null;
    }

    return this.find(word.substr(1), node.hash.get(word[0]));
  }
}

let trie = new Trie();
trie.add('peter', { 'date' : '1988-02-26' });
trie.add('petra', { 'date' : '1977-02-12' });
trie.add('danny', { 'date' : '1998-04-21' });
trie.add('jane', { 'date' : '1985-05-08' });
trie.add('jack', { 'date' : '1994-11-04' });
trie.add('pete', { 'date' : '1977-12-18' });
console.log(trie.isWord('jack'));
console.log(trie.root.hash.keys());
console.log(trie.root.hash.get('p'));
console.log(trie.print());
console.log(trie.find('peter'));
