export default class DisjointSetItem {

    constructor(value, keyCallback) {
      this.value = value;
      this.keyCallback = keyCallback;
      this.parent = null;
      this.children = {};
    }
  
    getKey() {
      // Allow user to define custom key generator.
      if (this.keyCallback) {
        return this.keyCallback(this.value);
      }
  
      // Otherwise use value as a key by default.
      return this.value;
    }
  
    getRoot() {
      return this.isRoot() ? this : this.parent.getRoot();
    }
  

    isRoot() {
      return this.parent === null;
    }
  

    getRank() {
      if (this.getChildren().length === 0) {
        return 0;
      }
  
      let rank = 0;
  
      this.getChildren().forEach((child) => {
        // Count child itself.
        rank += 1;
  
        // Also add all children of current child.
        rank += child.getRank();
      });
  
      return rank;
    }
  
    getChildren() {
      return Object.values(this.children);
    }
  

    setParent(parentItem, forceSettingParentChild = true) {
      this.parent = parentItem;
      if (forceSettingParentChild) {
        parentItem.addChild(this);
      }
  
      return this;
    }
  
    addChild(childItem) {
      this.children[childItem.getKey()] = childItem;
      childItem.setParent(this, false);
      return this;
    }
  }