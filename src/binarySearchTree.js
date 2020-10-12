/*
 *
 * 본인이 구현하는 메소드의 시간 복잡도에 대해서 생각해보세요.
 * 새로운 메소드나 속성은 추가하지 마세요.
 *
 */

const BinarySearchTree = function(value) {
  bst = {};
  bst.value = value;
  // Recording how many times the same value is inserted
  bst.valueCount = 0;

  bst.left = null;
  bst.right = null;

  bst.__proto__ = bstMethods;

  return bst;
};

const bstMethods = {};

bstMethods.insert = function (value) {
  if (value === this.value) {
    this.valueCount++;
    return;
  } 
  
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  } else {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  }
}

bstMethods.contains = function (value) {
  if (value === this.value) return true;

  let result = false;

  if (value > this.value) {
    if (this.right) {
      result = this.right.contains(value);
    } else {
      return false;
    }
  } else {
    if (this.left) {
      result = this.left.contains(value);
    } else {
      return false;
    }
  }

  return result;
}

bstMethods.depthFirstLog = function (callback) {
  callback(this.value);

  if (this.left) {
    this.left.depthFirstLog(callback);
  }

  if (this.right) {
    this.right.depthFirstLog(callback);
  }
}

