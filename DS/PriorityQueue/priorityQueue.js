import { MinHeap } from "./minHeap.js";

/// Assume will use max heap
export class PriortyQueue {
  constructor(options) {
    const { priorityCB } = options || {};
    if (priorityCB !== undefined && typeof priorityCB !== "function") {
      throw new Error(".constructor expects a valid priority function");
    }
    this._priortyCB = priorityCB || ((el) => +el);
    this._heap = new MinHeap();
  }

  enqueue(element, p) {
    if (p && Number.isNaN(+p)) {
      throw new Error(".enqueue expects a numeric priority");
    }

    if (Number.isNaN(+p) && Number.isNaN(this._priorityCb(element))) {
      throw new Error(
        ".enqueue expects a numeric priority " +
          "or a constructor callback that returns a number"
      );
    }

    const priority = !Number.isNaN(+p) ? p : this._priorityCb(element);
    this._heap.insert(+priority, element);
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this._getElementWithPriority(this._heap.extractRoot());
  }

  hasValue(item) {
    return this.findByValue(item).length > 0;
  }

  findByValue(item) {
    return this._heap.find(item);
  }

  changePriority(item, priority) {
    this._heap.remove(item);
    this.enqueue(item, priority);
    return this;
  }

  _getElementWithPriority(node) {
    return {
      priority: node.key,
      element: node.value,
    };
  }

  size() {
    return this._heap.size();
  }

  isEmpty() {
    return this._heap.isEmpty();
  }

  front() {
    if (this.isEmpty()) return null;
    return this._getElementWithPriority(this._heap.root());
  }

  clear() {
    this._heap.clear();
  }
}
