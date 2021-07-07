/* Hash Table */


//in js hash tables are usually used to implement objects but laid out below just to gain better understanding

//hash function

//pass in string we're hashing and the max - max is the number of buckets we're using in our hash table to store values
var hash = (string, max) => {
    var hash = 0;
    //start at hash 0 and for each character in the string we are going to add the char code of each character
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    //divide by the number of buckets and return the remainder
    //e.g. if we have 5 buckets, the remainder is going to be 0 1 2 3 or 4, and that would be the index that we're going to place the item into the array
    //simple hash function just for an example. They can get much more complicated.
    return hash % max;
  };
  
  let HashTable = function() {
    //storage array where we're going to store our data
    let storage = [];
    //number of buckets in the array
    const storageLimit = 14;
    
    //utility function for this example
    this.print = function() {
      console.log(storage)
    }
  
    this.add = function(key, value) {
        //figure out the index of the array by running it through the hash function
      var index = hash(key, storageLimit);
      //if there's nothing in that index in the storage array
      if (storage[index] === undefined) {
        //we'll just set that index to this key value pair
        storage[index] = [
          [key, value]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([key, value]);
        }
      }
    };
  
    this.remove = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index].length === 1 && storage[index][0][0] === key) {
        delete storage[index];
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            delete storage[index][i];
          }
        }
      }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    };
  
  };
  
  
  console.log(hash('quincy', 10))
  
  let ht = new HashTable();
  ht.add('beau', 'person');
  ht.add('fido', 'dog');
  ht.add('rex', 'dinosour');
  ht.add('tux', 'penguin')
  console.log(ht.lookup('tux'))
  ht.print();