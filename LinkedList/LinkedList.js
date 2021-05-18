import { LinkedListNode } from "./LinkedListNode.js";

export class LinkeList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = this.createNewNode(value);
    if (!this.getHead()) {
      this.setHead(newNode);
    } else {
      this.getTail().setNext(newNode);
    }
    this.setTail(newNode);
    this._size++;
  }

  prepend(value) {
    const newNode = this.createNewNode(value);
    newNode.setNext(this.getHead());
    this.setHead(newNode);
    if (!this.getTail()) {
      this.setTail(newNode);
    }
    this._size++;
  }

  remove(value) {
    if (value === undefined) throw new Error("remove() requires value");
    let wasRemoved = false;
    if (this.getSize() === 0) return wasRemoved;
    let current = this.getHead();
    let previous = null;
    let next = null;
    while (current !== null) {
      next = current.getNext();
      if (current.getValue() === value) {
        if (current === this.getHead()) {
          // at begining of linked list
          const nextNode = current.getNext();
          this.setHead(nextNode);
          if (!nextNode) this.setTail(nextNode);
          current.setNext(null);
        } else if (current === this.getTail()) {
          // at end of linked list
          this.setTail(previous);
          previous.setNext(null);
        } else {
          // at middle of linked list
          previous.setNext(current.getNext());
          current.setNext(null);
        }
        wasRemoved = true;
        this._size--;
      }
      previous = current;
      current = next;
    }
    return wasRemoved;
  }

  contains(value){
    if (value === undefined) throw new Error("contains() requires value");
    let found = false;
    let current = this.getHead();
    while(current){
      if(current.getValue() === value){
        found = true;
        break;
      }
      current = current.getNext();
    }
    return found;
  }

  createNewNode(value) {
    if (value === undefined)
      throw new Error("creating new linked list entry requires Value");
    return new LinkedListNode(value);
  }

  getHead() {
    return this._head;
  }

  getTail() {
    return this._tail;
  }

  setTail(node) {
    this._tail = node;
  }

  setHead(node) {
    this._head = node;
  }
  getSize() {
    return this._size;
  }
}
