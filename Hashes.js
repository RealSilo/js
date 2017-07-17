function HashTable(storageLimit) {
  this.storage = [];
  this.storageLimit = storageLimit || 10;

  this.hash = function(string, limit) {
    var hash = 0;

    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }

    return hash % limit;
  }

  this.add = function(key, value) {
    var index = this.hash(key, this.storageLimit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [
        [key, value]
      ]
    } else {
      var inserted = false;

      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  this.remove = function(key) {
    var index = this.hash(key, this.storageLimit);

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      this.storage.splice(index, 1);
    } else {
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index].splice(i, 1);
        }
      }
    }
  }

  this.find = function(key) {
    var index = this.hash(key, this.storageLimit);

    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }

  this.print = function() {
    console.log(this.storage);
  }
}

var newHash = new HashTable();
newHash.add('Peter', 5);
newHash.add('Retep', 3);
console.log(newHash.find('Peter'));
newHash.remove('Peter');
newHash.print();
