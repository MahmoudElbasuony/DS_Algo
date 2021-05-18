export class DoublyLinkedListNode {
  constructor(value) {
    this._value = value;
    this._next = null;
    this._previous = null;
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
    if (node !== null && !(node instanceof DoublyLinkedListNode))
      throw new Error("setPrevious require valid linked list node");
    this._next = node;
  }

  getPrevious() {
    return this._previous;
  }

  setPrevious(node) {
    if (node !== null && !(node instanceof DoublyLinkedListNode))
      throw new Error("setPrevious require valid linked list node");
    this._previous = node;
  }
}
