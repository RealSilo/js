class HashTable {
  constructor(storageLimit) {
    this.storage = [];
    this.storageLimit = storageLimit || 10;
  }

  hash(string) {
    let hashValue = 0;

    for(const letter of string) {
      hashValue += letter.charCodeAt(0)
    };

    return hashValue % this.storageLimit;
  }

  print() {
    console.log(this.storage);
  }

  add(key, value) {
    const index = this.hash(key);

    if (this.storage[index] === undefined) {
      this.storage[index] = [
        [key ,value]
      ];
    } else {
      let inserted = false;

      this.storage[index].forEach(element => {
        if (element[0] === key) {
          element[1] = value;
          inserted = true;
        }
      });

      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  remove(key) {
    const index = this.hash(key, this.storageLimit);

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      this.storage.splice(index, 1);
    } else {
      this.storage[index].forEach((element, i) => {
        if (element[0] === key) {
          this.storage[index].splice(i, 1);
        }
      });
    }
  }

  find(key) {
    const index = this.hash(key, this.storageLimit);

    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (const element of this.storage[index]) {
        if (element[0] === key) {
          return element[1];
        }
      };

    }
  }
}

let newHash = new HashTable();
newHash.add('Eterp', 4);
newHash.add('Peter', 5);
newHash.add('Retep', 3);
console.log(newHash.find('Peter'));
newHash.remove('Peter');
newHash.print();
