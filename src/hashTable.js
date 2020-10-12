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

  // 언제 다음 키로 probing하는가?
  // 받아온 키를 해싱한 값과, object에 저장된 원래 key (k)가 동시에 같을 때.
  // 동시에 같지 않다면 인덱스를 더하지 않고(probing 하지 않고) 그냥 덮어씌우게 된다
  while (this._storage.get(index)) { // 값이 있다?
    // 해싱된 인덱스 뿐 아니라 해싱되기 전 키값(k)도 같은지 확인한다
    if (Object.keys(this._storage.get(index))[0] === k) {
      break;
    }
    index = (index + 1) % this._limit;
  }
  
  const object = {
    [k] : v
  };

  this._storage.set(index, object);

  return true;
};

HashTable.prototype.retrieve = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);

  searchCount = 0;

  // 일단 해싱된 인덱스로 가져왔을 때 undefined가 아니라 무언가 저장되어 있고,
  while (this._storage.get(index)) {
    // 해싱되기 전 키값이 k와 같다면 그대로 가져오면 된다
    if (Object.keys(this._storage.get(index))[0] === k) {
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
    if (Object.keys(this._storage.get(index))[0] === k) {
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

  return true; // 삭제했다면 true를 반환
};
