import DisjointSetItem from "./disjointsetitem.js";

export class DisjointSet {
  constructor(keyCallback) {
    this.keyCallback = keyCallback;
    this.items = {};
  }

  makeSet(itemValue) {
    const disjointSetItem = new DisjointSetItem(itemValue, this.keyCallback);

    if (!this.items[disjointSetItem.getKey()]) {
      // Add new item only in case if it not presented yet.
      this.items[disjointSetItem.getKey()] = disjointSetItem;
    }

    return this;
  }

  find(itemValue) {
    const templateDisjointItem = new DisjointSetItem(
      itemValue,
      this.keyCallback
    );

    // Try to find item itself;
    const requiredDisjointItem = this.items[templateDisjointItem.getKey()];

    if (!requiredDisjointItem) {
      return null;
    }

    return requiredDisjointItem.getRoot().getKey();
  }

  union(valueA, valueB) {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      throw new Error("One or two values are not in sets");
    }

    if (rootKeyA === rootKeyB) {
      // In case if both elements are already in the same set then just return its key.
      return this;
    }

    const rootA = this.items[rootKeyA];
    const rootB = this.items[rootKeyB];

    if (rootA.getCount() < rootB.getCount()) {
      // If rootB's tree is bigger then make rootB to be a new root.
      rootB.addChild(rootA);
      delete this.items[rootKeyA];
      return this;
    }

    // If rootA's tree is bigger then make rootA to be a new root.
    rootA.addChild(rootB);
    delete this.items[rootKeyB];

    return this;
  }

  inSameSet(valueA, valueB) {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      throw new Error("One or two values are not in sets");
    }

    return rootKeyA === rootKeyB;
  }

  sizes() {
    return Object.values(this.items).map(s => s.getCount());
  }
}
