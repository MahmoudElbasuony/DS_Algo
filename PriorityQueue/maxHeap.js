import { Heap } from "./heap.js";

export class MaxHeap extends Heap {
  _compareKeys(parentKey, childKey) {
    return parentKey > childKey;
  }

  _compareChildrenBefore(index, leftChildIndex, rightChildIndex) {
    const leftChildKey = this.getKey(this._nodes[leftChildIndex]);
    const rightChildKey = this.getKey(this._nodes[rightChildIndex]);

    if (rightChildKey > leftChildKey && rightChildIndex < index) {
      return rightChildIndex;
    }
    return leftChildIndex;
  }

  static heapify(list) {
    return super.heapify(list, MaxHeap);
  }
}
