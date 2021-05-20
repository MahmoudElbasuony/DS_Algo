export class BSTNode {
  constructor(key, value) {
    this._key = key;
    this._value = value;
    this._left = null;
    this._right = null;
    this._parent = null;
  }

  getValue() {
    return this._value;
  }
  setValue(value) {
    BSTNode.checkNodeValue(value);
    this._value = value;
  }
  getKey() {
    return this._key;
  }
  setKey(key) {
    BSTNode.checkNodeKey(key);
    this._key = key;
  }
  getLeft() {
    return this._left;
  }
  getRight() {
    return this._right;
  }
  getParent() {
    return this._parent;
  }
  setParent(node) {
    BSTNode.checkNodeValidity(node, "Parent node should be BSTNode");
    this._parent = node;
  }
  setLeft(node) {
    BSTNode.checkNodeValidity(node, "Left node should be BSTNode");
    this._left = node;
    if (node) node.setParent(this);
  }
  setRight(node) {
    BSTNode.checkNodeValidity(node, "Right node should be BSTNode");
    this._right = node;
    if (node) node.setParent(this);
  }

  find(key) {
    if (key === this.getKey()) return this;

    if (key < this.getKey() && this.hasLeft()) return this.getLeft().find(key);

    if (key > this.getKey() && this.hasRight())
      return this.getRight().find(key);

    return null;
  }
  hasRight() {
    return !!this._right;
  }
  hasLeft() {
    return !!this._left;
  }
  isRoot() {
    return !this._parent;
  }
  isLeaf() {
    return !this.hasLeft() && !this.hasRight();
  }

  getLeftHeight() {
    if (!this.hasLeft()) {
      return 0;
    }
    return this.getLeft().getHeight() + 1;
  }

  getRightHeight() {
    if (!this.hasRight()) {
      return 0;
    }
    return this.getRight().getHeight() + 1;
  }

  getHeight() {
    return Math.max(this.getLeftHeight(), this.getRightHeight());
  }
  getbalanceFactor() {
    return this.getLeftHeight() - this.getRightHeight();
  }

  static checkNodeKey(key) {
    if (key === undefined || key === null || !key.toString().trim())
      throw new Error("BSTNode should have a key");
    if (typeof key !== "string" && !Number.isInteger(key))
      throw new Error("BST key should be string or number");
  }
  static checkNodeValue(value) {
    if (value === undefined) throw new Error("BSTNode should have a value");
  }
  static checkNodeValidity(node, errorStr = "BSTNode should be valid") {
    if (node && !(node instanceof BSTNode)) throw new Error(errorStr);
  }
}
