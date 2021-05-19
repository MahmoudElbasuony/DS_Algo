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
