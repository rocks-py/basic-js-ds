const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

class Node {
  data = null;
  left = null;
  right = null;
}
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  _root = null;

  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      this._root = new Node();
      this._root.data = data;
      return;
    }

    let item = this._root;
    
    while (item.data !== null) {
      if (data < item.data) {
        if (item.left === null) item.left = new Node();
        item = item.left;
      } else {
        if (item.right === null) item.right = new Node();
        item = item.right;
      }
    }
    item.data = data;
  }

  has(data) {
    let item = this._root;
    if (item == null) return false;
    while (true) {
      if (data === item.data) {
        return true;
      }
      if (data < item.data) {
        if (item.left === null) return false;
        item = item.left;
      } else {
        if (item.right === null) return false;
        item = item.right;
      }
    }
  }

  find(data) {
    let item = this._root;
    while (true) {
      if (data === item.data) {
        return item;
      }
      if (data < item.data) {
        if (item.left === null) return null;
        item = item.left;
      } else {
        if (item.right === null) return null;
        item = item.right;
      }
    }
  }

  toTree(arr) {
    this._root = null;
    arr.forEach(item => {
      this.add(item);
    })
  }

  remove(data) {
    const toArr = (itm) => {
      if (itm === null) return [];
      let arr = [itm.data];
      let aLeft = toArr(itm.left);
      let aRight = toArr(itm.right);
      arr = arr.concat(aLeft);
      arr = arr.concat(aRight);
      return arr;
    }

    let item = this._root;
    // step 1 - convert to array
    let new_arr = toArr(item);
    // step 2 - remove item
    let idx = new_arr.indexOf(data);
    if (idx !== -1) { 
      new_arr.splice(idx, 1);
    }
    // step 3 - rebalance tree
    this.toTree(new_arr);
    // console.log(new_arr);
  }

  min() {
    let item = this._root;
    if (item === null) return null;
    while (item.left !== null) {
      item = item.left;
    }
    return item.data;
  }
  
  max() {
    let item = this._root;
    if (item === null) return null;
    while (item.right !== null) {
      item = item.right;
    }
    return item.data;
  }
}

module.exports = {
  BinarySearchTree
};


// const tree = new BinarySearchTree();
// tree.add(1);
// tree.add(2);
// tree.add(3);
// tree.add(4);
// tree.add(5);
// // console.log(tree.root().data);
// // console.log(tree.min());
// // console.log(tree.max());
// console.log(JSON.stringify(tree.root()));
// tree.remove(5);
// console.log(JSON.stringify(tree.root()));
// console.log(tree.has(5));
// console.log(tree.max());

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// // console.log(tree);
// // console.log(JSON.stringify(tree));
// tree.remove(14);
// // console.log(tree);
// // console.log(JSON.stringify(tree));
// tree.remove(8);
// tree.remove(9);
// console.log(tree.has(14), false);
// console.log(tree.has(8), false);
// console.log(tree.has(9), false);
// console.log(tree.has(2), true);
// console.log(tree.has(6), true);
// console.log(tree.has(128), true);
// console.log(tree.has(31), true);
// console.log(tree.has(54), true);
// console.log(tree.has(1), true);