/*
 *
 * 본인이 구현하는 메소드의 시간 복잡도에 대해서 생각해보세요.
 * 새로운 메소드나 속성은 추가하지 마세요.
 *
 */

const Set = function() {
  const set = Object.create(setPrototype);
  set._storage = null;
  return set;
};

const setPrototype = {};

setPrototype.add = function(item) {
};

setPrototype.contains = function(item) {
};

setPrototype.remove = function(item) {
};
