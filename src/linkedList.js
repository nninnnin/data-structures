/*
 *
 * 본인이 구현하는 메소드의 시간 복잡도에 대해서 생각해보세요.
 * 새로운 메소드나 속성은 추가하지 마세요.
 *
 */

const LinkedList = function() {
  const list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};
