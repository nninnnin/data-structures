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

HashTable.prototype.insert = function(k, v, isCopying) {
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

  // hashTable storage가 현재 몇개를 저장하고 있게 되었는지, stockCount를 통해 파악한다
  // insert 후가 적절한 시점으로 판단
  let stockCount = 0;
  this._storage.each((stock) => {
    if (typeof stock === "object") stockCount++;
  });

  // 너무 많은 양을 저장하고 있다면 capacity (limit)을 늘려주고 (절반 이상)
  if (stockCount > parseInt(this._limit / 2) && !isCopying) {
    this._limit = this._limit * 2;
    // 새로운 limitedArray를 만들고 each를 사용해서 기존의 것에서 데이터를 가져와서 넣어준다..
    copyStocks.call(this, this._storage);
  } 
  else if (stockCount <= parseInt(this._limit / 4) && !isCopying) { // 반대로 capacity에 비해 너무 적은 양을 저장하고 있다면 capacity를 줄여준다 (1/4 이하)
    this._limit = parseInt(this._limit / 2);
    // 여기도 마찬가지..함수를 하나 만들도록 하자
    copyStocks.call(this, this._storage);
  }

  function copyStocks (prevStorage) {
    this._storage = LimitedArray(this._limit); // 해당 해시테이블의 스토리지를 새로운 limit을 가진 것으로 바꾼다

    prevStorage.each((elem) => {
      if (typeof elem === "object") {
        this.insert(Object.keys(elem)[0], Object.values(elem)[0], true);
      }
    });

  }

  return true;
};

HashTable.prototype.retrieve = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);

  let searchCount = 0;

  // 일단 해싱된 인덱스로 가져왔을 때 undefined가 아니라 무언가 저장되어 있고,
  while (this._storage.get(index)) {
    // 해싱되기 전 키값이 k와 같다면 그대로 가져오면 된다
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
    result = searchingResult; // undefined
  }

  return result;
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);

  let searchCount = 0;
  
  // 삭제할 때에도 마찬가지로..근데 더미노드를 주어야한다

  while (this._storage.get(index)) { // 뭔가 값이 나왔다,
    // 그렇다면 해싱전의 키값과도 같은지 확인해본다 (다를 수 있다)
    if (this._storage.get(index).hasOwnProperty(k)) {
      // 만일 같다면, 삭제해야 할 대상이므로 probing을 멈춘다
      break;
    }
    index = (index + 1) % this._limit;
    searchCount++;

    // limitedArray의 크기만큼 순회하였는데도 index와 k가 모두 같은 값을 찾지 못했다면 에러를 반환한다
    if (searchCount === this._limit) {
      throw new Error('Failed to remove value - key is not found');
    }
  }

  this._storage.set(index, undefined);

  let stockCount = 0;
  this._storage.each((stock) => {
    if (typeof stock === "object") stockCount++;
  });

  if (stockCount <= parseInt(this._limit / 8)) { // 반대로 capacity에 비해 너무 적은 양을 저장하고 있다면 capacity를 줄여준다 (1/4 이하)
    this._limit = parseInt(this._limit / 2);
    // 여기도 마찬가지..함수를 하나 만들도록 하자
    copyStocks.call(this, this._storage);
  }

  function copyStocks (prevStorage) {
    this._storage = LimitedArray(this._limit); // 해당 해시테이블의 스토리지를 새로운 limit을 가진 것으로 바꾼다

    prevStorage.each((elem) => {
      if (typeof elem === "object") {
        this.insert(Object.keys(elem)[0], Object.values(elem)[0], true);
      }
    });

  }

  return true; // 삭제했다면 true를 반환
};
