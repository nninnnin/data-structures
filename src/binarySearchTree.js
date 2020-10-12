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
    if (this.right) { // null이 아닌 경우
      this.right.insert(value); // 재귀시행
    } else { // null인 경우 새로 만들어서 넣음
      const newBST = new BinarySearchTree(value);
      this.right = newBST;
    }
  } else {
    if (this.left) {
      this.left.insert(value);
    } else {
      const newBST = new BinarySearchTree(value);
      this.left = newBST;
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
  // 일단 전위순회(pre-order)로 구현한다
  callback(this.value);

  if (this.left) {
    this.left.depthFirstLog(callback);
  }

  if (this.right) {
    this.right.depthFirstLog(callback);
  }
}

