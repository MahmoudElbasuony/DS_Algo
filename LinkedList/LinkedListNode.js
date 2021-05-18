export class LinkedListNode {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  getValue() {
    return this._value;
  }
  setValue(newVal) {
    this._value = newVal;
  }

  getNext() {
    return this._next;
  }

  setNext(node) {
    if (node !== null && !(node instanceof LinkedListNode))
      throw new Error("setNext require valid linked list node");
    this._next = node;
  }
}
