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

  pairIsInCorrectOrder(firstElementIndx, secondElementIndx) {
    const firstElementKey = this.getKey(this._nodes[firstElementIndx]);
    const secondElementKey = this.getKey(this._nodes[secondElementIndx]);
    return firstElementKey <= secondElementKey;
  }

  static heapify(list) {
    return super.heapify(list, MaxHeap);
  }
}
