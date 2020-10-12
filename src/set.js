/*
 *
 * 본인이 구현하는 메소드의 시간 복잡도에 대해서 생각해보세요.
 * 새로운 메소드나 속성은 추가하지 마세요.
 *
 */

const Set = function() {
  const set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

const setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
    return this;
  } else {
    return false;
  }
}

setPrototype.contains = function(item) {
  if (this._storage.includes(item)) {
    return true;
  } else {
    return false;
  }
};

// set은 들어온 순서대로..
setPrototype.remove = function(item) {
  const itemIndex = this._storage.indexOf(item);
  if (itemIndex !== -1) {
    this._storage.splice(itemIndex, 1);
    return true;
  } else {
    return false;
  }
};
