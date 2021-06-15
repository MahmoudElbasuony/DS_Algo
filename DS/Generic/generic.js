// class DisjointSet {
//   constructor(keySelector) {
//     this.items = new Map();
//     this.keySelector = keySelector;
//   }

//   inSameSet(itemVal1, itemVal2) {
//     const root1Key = this.getPresentingNode(itemVal1);
//     const root2Key = this.getPresentingNode(itemVal2);
//     return root1Key !== null && root1Key === root2Key;
//   }

//   makeSet(itemValue) {
//     const item = new DisjointSetItem(itemValue, this.keySelector);
//     if (!this.items.has(item.getKey())) this.items.set(item.getKey(), item);
//     return this;
//   }

//   union(item1, item2) {
//     const root1Key = this.getPresentingNode(item1);
//     const root2Key = this.getPresentingNode(item2);
//     if (root1Key === null || root2Key === null || root1Key === root2Key)
//       return this;
//     const root1 = this.items.get(root1Key);
//     const root2 = this.items.get(root2Key);
//     if (root1.count() < root2.count()) {
//       root2.addChild(root1);
//       //   this.items.delete(root1Key);
//     } else {
//       root1.addChild(root2);
//       //   this.items.delete(root2Key);
//     }
//     return this;
//   }

//   getPresentingNode(itemval) {
//     const item = new DisjointSetItem(itemval, this.keySelector);
//     const existedItem = this.items.get(item.getKey());
//     if (!existedItem) return null;
//     return existedItem.getRoot().getKey();
//   }
// }

// class DisjointSetItem {
//   constructor(value, keySelector) {
//     this.keySelector = keySelector;
//     this.value = value;
//     this.parent = null;
//     this.children = new Map();
//   }

//   isRoot() {
//     return this.parent === null;
//   }

//   getKey() {
//     return this.keySelector ? this.keySelector(this.value) : this.value;
//   }

//   getRoot() {
//     return this.isRoot() ? this : this.parent.getRoot();
//   }

//   addChild(item) {
//     let parentToAttachTo = null;
//     if (this.isRoot()) {
//       parentToAttachTo = this;
//     } else {
//       parentToAttachTo = this.getRoot();
//     }
//     item.parent = parentToAttachTo;
//     parentToAttachTo.children.set(item.getKey(), item);
//     return this;
//   }
//   count() {
//     return this.children.size;
//   }
// }
// const disjointset = new DisjointSet();
// disjointset.makeSet(1);
// disjointset.makeSet(2);
// disjointset.makeSet(3);
// disjointset.makeSet(4);

// disjointset.union(1, 2);
// disjointset.union(1, 3);

// console.log(disjointset.inSameSet(1, 3));

// class Heap {
//   items = [];
//   constructor() {}
//   parentIndex(i) {
//     return Math.floor((i - 1) / 2);
//   }
//   leftIndex(i) {
//     return i + 1;
//   }
//   rightIndex(i) {
//     return i + 2;
//   }
//   left(indx) {
//     return this.items[this.leftIndex(indx)];
//   }
//   right(indx) {
//     return this.items[this.rightIndex(indx)];
//   }
//   parent(indx) {
//     const parentIndx = this.parentIndex(indx);
//     return parentIndx >= 0 ? this.items[parentIndx] : null;
//   }

//   hasParent(indx) {
//     return this.parentIndex(indx) >= 0;
//   }

//   hasRight(indx) {
//     return this.rightIndex(indx) < this.size;
//   }
//   hasLeft(indx) {
//     return this.leftIndex(indx) < this.size;
//   }

//   insert(key, value) {
//     const node = value === undefined ? key : { key, value };
//     this.items.push(node);
//     this.#heapifyUp();
//   }

//   #heapifyUp(startIndx = this.size - 1) {
//     let parentIndx = this.parentIndex(startIndx);
//     let childIndx = startIndx;
//     while (this.shouldSwap(this.#getKey(parentIndx), this.#getKey(childIndx))) {
//       this.#swap(parentIndx, childIndx);
//       childIndx = parentIndx;
//       parentIndx = this.parentIndex(parentIndx);
//     }
//   }

//   #getKey(itemIndx) {
//     const item = this.items[itemIndx];
//     if (item === undefined || item === null) return null;
//     return typeof item === "object" ? item.key : item;
//   }

//   #swap(parentIndx, childIndx) {
//     [this.items[parentIndx], this.items[childIndx]] = [
//       this.items[childIndx],
//       this.items[parentIndx],
//     ];
//   }

//   get size() {
//     return this.items.length;
//   }
// }

// class MinHeap extends Heap {
//   shouldSwap(parentKey, childKey) {
//     return parentKey !== null && childKey !== null && parentKey > childKey;
//   }
// }

// class MaxHeap extends Heap {
//   shouldSwap(parentKey, childKey) {
//     return parentKey !== null && childKey !== null && parentKey < childKey;
//   }
// }

// const minHeap = new MinHeap();
// minHeap.insert(3);
// minHeap.insert(2);
// minHeap.insert(1);
// minHeap.insert(0);
// console.log(minHeap.items);

// const maxHeap = new MaxHeap();
// maxHeap.insert(3);
// maxHeap.insert(2);
// maxHeap.insert(1);
// maxHeap.insert(0);
// console.log(maxHeap.items);




