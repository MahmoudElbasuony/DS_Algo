import { BSTNode } from "./BSTNode.js";

export class BinarySearchTree {
  constructor() {
    this._root = null;
    this._size = 0;
  }

  insert(key, value) {
    const newNode = this._createNode(key, value);
    if (this.isEmpty()) {
      this.setRoot(newNode);
      this._size++;
      return this;
    }
    const insertRecursive = (current) => {
      const currentKey = current.getKey();
      if (key === currentKey) {
        // just replace the value
        current.setValue(newNode.getValue());
      } else if (key > currentKey) {
        if (current.hasRight()) {
          insertRecursive(current.getRight());
        } else {
          current.setRight(newNode);
          this._size++;
        }
      } else {
        if (current.hasLeft()) {
          insertRecursive(current.getLeft());
        } else {
          current.setLeft(newNode);
          this._size++;
        }
      }
    };
    insertRecursive(this.getRoot());
    return this;
  }

  contains(key) {
    const containsRecursive = (current) => {
      if (key === current.getKey()) return true;
      else if (current.hasLeft() && key < current.getKey()) {
        return containsRecursive(current.getLeft());
      } else if (current.hasRight() && key > current.getKey()) {
        return containsRecursive(current.getRight());
      }
      return false;
    };
    return containsRecursive(this.getRoot());
  }

  delete(key) {
    const deleteRecursive = (current) => {
      if (key === current.getKey()) {
        const currentParent = current.getParent();
        if (current.isRoot() && current.isLeaf()) {
          /// single node in the tree
          this.setRoot(null);
          this._size--;
          return true;
        } else {
          /// multi node path
          let largest = null;
          if (current.hasLeft()) {
            largest = this.findMaxNode(current.getLeft());
          } else if (current.hasRight()) {
            largest = this.findMaxNode(current.getRight());
          } else {
            // it is a leaf
            if (currentParent.getLeft() === current)
              currentParent.setLeft(null);
            else currentParent.setRight(null);
            current.setParent(null);
            this._size--;
            return true;
          }

          if (largest) {
            if (largest === current.getRight())
              largest.setLeft(current.getLeft());
            else if (largest === current.getLeft())
              largest.setRight(current.getRight());
            else {
              largest.setLeft(current.getLeft());
              largest.setRight(current.getRight());
            }

            if (!currentParent) {
              // it is root
              this.setRoot(largest);
            } else {
              if (currentParent.getLeft() === current) {
                currentParent.setLeft(largest);
              } else {
                currentParent.setRight(largest);
              }
            }
            largest.setParent(currentParent);
            current.setParent(null);
            current.setRight(null);
            current.setLeft(null);
            this._size--;
            return true;
          } else {
            return false;
          }
        }
      } else if (current.hasLeft() && key < current.getKey()) {
        return deleteRecursive(current.getLeft());
      } else if (current.hasRight() && key > current.getKey()) {
        return deleteRecursive(current.getRight());
      }
      return false;
    };
    return deleteRecursive(this.getRoot());
  }

  findMinNode(startingNode = this.getRoot()) {
    let current = startingNode;
    if (!current.hasLeft()) {
      return current;
    } else {
      return this.findMinNode(current.getLeft());
    }
  }

  findMaxNode(startingNode = this.getRoot()) {
    let current = startingNode;
    if (!current.hasRight()) {
      return current;
    } else {
      return this.findMinNode(current.getRight());
    }
  }

  traverseInOrder(cb, node = this.getRoot()) {
    if (node === null) return;
    this.traverseInOrder(cb, node.getLeft());
    if (cb) cb(node.getKey(), node.getValue());
    this.traverseInOrder(cb, node.getRight());
  }

  traversePreOrder(cb, node = this.getRoot()) {
    if (node === null) return;
    if (cb) cb(node.getKey(), node.getValue());
    this.traversePreOrder(cb, node.getLeft());
    this.traversePreOrder(cb, node.getRight());
  }

  traversePostOrder(cb, node = this.getRoot()) {
    if (node === null) return;
    this.traversePostOrder(cb, node.getLeft());
    this.traversePostOrder(cb, node.getRight());
    if (cb) cb(node.getKey(), node.getValue());
  }

  _createNode(key, value) {
    BSTNode.checkNodeKey(key);
    BSTNode.checkNodeValue(value);
    return new BSTNode(key, value);
  }

  clear() {
    this._root = null;
    this._size = 0;
  }
  isEmpty() {
    return this._size === 0;
  }
  getRoot() {
    return this._root;
  }
  setRoot(node) {
    BSTNode.checkNodeValidity(node);
    this._root = node;
  }
  size() {
    return this._size;
  }
}
