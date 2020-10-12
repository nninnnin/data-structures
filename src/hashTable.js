/*
 *
 * 본인이 구현하는 메소드의 시간 복잡도에 대해서 생각해보세요.
 * 새로운 메소드나 속성은 추가하지 마세요.
 *
 */

const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  return this;
};

HashTable.prototype.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k ,this._limit);
  let searchCount = 0;

  while (this._storage.get(index)) {
    searchCount++;
    if (searchCount === this._limit) throw new Error('Error : There is no space in hash table!');

    if (this._storage.get(index).hasOwnProperty(k)) {
      break;
    }
    index = (index + 1) % this._limit;
  }
  
  const object = {
    [k] : v
  };

  this._storage.set(index, object);


  let stockCount = 0;
  this._storage.each((stock) => {
    if (typeof stock === "object") stockCount++;
  });

  if (stockCount / this._limit >= 0.875) {
    this._limit = this._limit * 2;
    copyStocks.call(this, this._storage);
  }

  return true;
};

HashTable.prototype.retrieve = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);

  let searchCount = 0;

  while (this._storage.get(index)) {
    if (this._storage.get(index).hasOwnProperty(k)) {
      break;
    }

    index = (index + 1) % this._limit;
    searchCount++;

    if (searchCount === this._limit) {
      throw new Error('Failed to retrieve value - There is no such a key');
    }
  }

  const searchingResult = this._storage.get(index);
  let result;

  if (searchingResult) {
    result = searchingResult[k];
  } else {
    result = searchingResult;
  }

  return result;
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);

  let searchCount = 0;
  
  while (this._storage.get(index)) {
    if (this._storage.get(index).hasOwnProperty(k)) {
      break;
    }
    index = (index + 1) % this._limit;
    searchCount++;

    if (searchCount === this._limit) {
      throw new Error('Failed to remove value - key is not found');
    }
  }

  this._storage.set(index, undefined);

  let stockCount = 0;
  this._storage.each((stock) => {
    if (typeof stock === "object") stockCount++;
  });

  if (stockCount / this._limit <= 0.125) {
    this._limit = parseInt(this._limit / 2);
    copyStocks.call(this, this._storage);
  }

  return true;
};


function copyStocks (prevStorage) {
  this._storage = LimitedArray(this._limit);

  prevStorage.each((elem) => {
    if (typeof elem === "object") {
      const [entry] = Object.entries(elem);
      this.insert(entry[0], entry[1]);
    }
  });
}
