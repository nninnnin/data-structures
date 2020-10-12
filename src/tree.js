/*
 *
 * 본인이 구현하는 메소드의 시간 복잡도에 대해서 생각해보세요.
 * 새로운 메소드나 속성은 추가하지 마세요.
 *
 */

const Tree = function(value) {
  const newTree = {};
  newTree.value = value;

  newTree.__proto__ = treeMethods;

  newTree.children = [];

  return newTree;
};

// TODO: set up as prototype of Tree. Do not move around this code.
const treeMethods = {};

treeMethods.addChild = function(value) {
  const newTree = new Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) return true;

  let result = false;

  if (this.children.length > 0) {
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      result = child.contains(target);
      if (result) break;
    }
  }

  return result;
};
