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

  const linkedListNode = new Node();
  list.head = linkedListNode;
  list.tail = linkedListNode;

  list.addToTail = function(value) {
    if (list.head === list.tail && !list.head.value) {
      list.tail.value = value;
    } else {
      const newNode = new Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    const headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) {
    let currNode = list.head;

    while (currNode) {
      if (currNode.value === target) {
        return true;
      }

      currNode = currNode.next;
    }

    return false;
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};
