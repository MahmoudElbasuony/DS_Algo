export class Heap {
  constructor(nodes) {
    this._nodes = Array.isArray(nodes) ? nodes : [];
  }

  addNode(node) {
    this._nodes.push(node);
    this.heapifyUp();
    return this;
  }

  remove(item) {
    const numberOfItemsToRemove = this.find(item).length;
    for (let i = 0; i < numberOfItemsToRemove; i++) {
      // We need to find item index to remove each time after removal since
      // indices are being changed after each heapify process.
      const indexToRemove = this.find(item).pop();

      // If we need to remove last child in the heap then just remove it.
      // There is no need to heapify the heap afterwards.
      if (indexToRemove === this.size() - 1) {
        this._nodes.pop();
      } else {
        // Move last element in heap to the (removed) position.
        this._nodes[indexToRemove] = this._nodes.pop();
        const parentItem = this.parent(indexToRemove);
        const parentIndex = this.getParentIndx(indexToRemove);
        // If there is no parent [root] or parent is in correct order with the node
        // we're going to delete then heapify down. Otherwise heapify up.
        if (this.hasLeftChild(indexToRemove) &&  (!parentItem || this.pairIsInCorrectOrder(parentIndex, indexToRemove))) 
        {
          this.heapifyDown(indexToRemove);
        } 
        else {
          this.heapifyUp(indexToRemove);
        }
      }
    }

    return this;
  }

  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
  }

  parent(childIndex) {
    return this._nodes[this.getParentIndx(childIndex)];
  }
  getParentIndx(childIndx) {
    return Math.floor((childIndx - 1) / 2);
  }
  getLeftChildIndx(parentIndx) {
    return parentIndx + 1;
  }
  getRightChildIndx(parentIndx) {
    return parentIndx + 2;
  }

  getKey(node) {
    if (typeof node === "object") return node.key;
    return node;
  }

  hasLeft(indx) {
    return this.getLeftChildIndx(indx) < this.size();
  }
  hasRight(indx) {
    return this.getRightChildIndx(indx) < this.size();
  }
  hasPrent(indx) {
    return this.getParentIndx(indx) >= 0;
  }

  heapifyUp(startIndex = this.size() - 1) {
    let childIndx = startIndex;
    let parentIndx = this.getParentIndx(childIndx);

    while (this.shouldSwap(parentIndx, childIndx)) {
      this.swap(parentIndx, childIndx);
      childIndx = parentIndx;
      parentIndx = this.getParentIndx(childIndx);
    }
  }

  heapifyDown(startIndex = 0) {
    let parentIndx = startIndex;
    let childIndx = this._compareParentChildren(parentIndx);

    while (this.shouldSwap(parentIndx, childIndx)) {
      this.swap(parentIndx, childIndx);
      parentIndx = childIndx;
      childIndx = this._compareParentChildren(parentIndx);
    }
  }

  _compareParentChildren(parentIndx) {
    if (!this.hasLeft(parentIndx) && !this.hasRight(parentIndx)) {
      return -1;
    }

    const leftChildIndx = this.getLeftChildIndx(parentIndx);
    const rightChildIndx = this.getRightChildIndx(parentIndx);

    if (!this.hasLeft(parentIndx)) {
      return leftChildIndx;
    }

    if (!this.hasRight(parentIndx)) {
      return rightChildIndx;
    }

    return this._compareByIndex(leftChildIndx, rightChildIndx)
      ? leftChildIndx
      : rightChildIndx;
  }

  _compareByIndex(indx1, indx2) {
    return this._compareKeys(
      this.getKey(this._nodes[indx1]),
      this.getKey(this._nodes[indx2])
    );
  }

  swap(parentIndx, childIndx) {
    const temp = this._nodes[childIndx];
    this._nodes[childIndx] = this._nodes[parentIndx];
    this._nodes[parentIndx] = temp;
  }

  shouldSwap(parentIndx, childIndx) {
    if (parentIndx < 0 || parentIndx >= this.size()) return false;
    if (childIndx < 0 || childIndx >= this.size()) return false;

    return !this._compareByIndex(parentIndx, childIndx);
  }

  size() {
    return this._nodes.length;
  }

  insert(key, value) {
    const newNode = value !== undefined ? { key, value } : key;
    this.addNode(newNode);
    this.heapifyUp();
  }

  isValid(parentIndex = 0) {
    let isValidLeft = true;
    let isValidRight = true;

    if (this.hasLeft(parentIndex)) {
      const leftChildIndex = this.getLeftChildIndx(parentIndex);
      if (!this._compareByIndex(parentIndex, leftChildIndex)) return false;
      isValidLeft = this.isValid(leftChildIndex);
    }

    if (this.hasRight(parentIndex)) {
      const rightChildIndex = this.getRightChildIndx(parentIndex);
      if (!this._compareByIndex(parentIndex, rightChildIndex)) return false;
      isValidRight = this.isValid(rightChildIndex);
    }

    return isValidLeft && isValidRight;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this._nodes = [];
  }

  root() {
    if (this.isEmpty()) return null;
    return this._nodes[0];
  }

  fix() {
    for (let i = 0; i < this.size(); i++) {
      this.heapifyUp(i);
    }
    return this;
  }

  sort() {
    for (let i = this.size() - 1; i > 0; i--) {
      this.swap(0, i);
      this._heapifyDownUntil(i);
    }
    return this._nodes;
  }

  _heapifyDownUntil(index) {
    let parentIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;
    let childIndex;

    while (leftChildIndex < index) {
      childIndex = this._compareChildrenBefore(
        index,
        leftChildIndex,
        rightChildIndex
      );

      if (this.shouldSwap(parentIndex, childIndex)) {
        this.swap(parentIndex, childIndex);
      }

      parentIndex = childIndex;
      leftChildIndex = this.getLeftChildIndx(parentIndex);
      rightChildIndex = this.getRightChildIndx(parentIndex);
    }
  }

  extractRoot() {
    if (this.isEmpty()) return null;

    const root = this.root();
    this._nodes[0] = this._nodes[this.size() - 1];
    this._nodes.pop();
    this.heapifyDown();

    return root;
  }

  find(item) {
    const foundItemIndices = [];

    for (let itemIndex = 0; itemIndex < this._nodes.length; itemIndex += 1) {
      const val = typeof this._nodes[itemIndex] === "object" ? this._nodes[itemIndex].value : this._nodes[itemIndex];
      if (item === val)
        foundItemIndices.push(itemIndex);
    }

    return foundItemIndices;
  }

  static isHeapified(list, HeapType) {
    return new HeapType(list).isValid();
  }

  static heapify(list, HeapType) {
    if (!Array.isArray(list)) {
      throw new Error(".heapify expects an array");
    }
    return new HeapType(list).fix();
  }
}
