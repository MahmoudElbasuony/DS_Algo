export class TrieNode {
  constructor(value, isWordEnd = false) {
    this._value = value || null;
    this._children = new Map();
    this._isWordEnd = isWordEnd;
  }

  getValue() {
    return this._value;
  }

  setValue(val) {
    this._value = val;
  }

  isWordEnd() {
    return this._isWordEnd;
  }

  setWordEnd(isWordEnd) {
    this._isWordEnd = isWordEnd;
  }

  has(key) {
    return this._children.has(key);
  }

  addChild(key) {
    if (typeof key !== "string" || !key || !key.trim().length)
      throw new Error("add child require a key");
    if (!this._children.has(key)) {
      const newNode = new TrieNode(key);
      this._children.set(key, newNode);
    }
  }

  getChild(key) {
    return this._children.get(key);
  }

  getChildren() {
    return this._children;
  }
}

export class Trie {
  constructor() {
    this._root = new TrieNode(null);
    this.count = 0;
  }

  insertWord(word) {
    if (!word || typeof word !== "string" || !word.trim().length)
      throw new Error("insertWord expects not empty string");

    let current = this._root;
    for (let i = 0; i < word.length; i++) {
      const character = word[i];
      if (!current.has(character)) {
        current.addChild(character);
        this.count++;
      }
      current = current.getChild(character);
    }

    if (!current.isWordEnd()) current.setWordEnd(true);
  }

  has(word) {
    if (!word || typeof word !== "string" || !word.trim().length)
      throw new Error("has expects not empty string");

    let current = this._root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.has(char)) return false;
      current = current.getChild(char);
    }

    if (!current.isWordEnd()) return false;

    return true;
  }

  foreach(cb) {
    if (typeof cb !== "function") {
      throw new Error("Trie.forEach expects a callback function");
    }

    const visit = (node, word = "") => {
      if (node.isWordEnd()) cb(word);
      const children = node.getChildren();
      children.forEach((c) => visit(c, word + c.getValue()));
    };
    visit(this._root);
  }
}
