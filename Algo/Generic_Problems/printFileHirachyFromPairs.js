function printTreeAsString(root) {
  if (!root) return;

  const stack = [[0, root]];
  while (stack.length) {
    const [level, node] = stack.pop();
    console.log(`${"-".repeat(level)}${node.value}`);
    if (!node.isLeaf())
      stack.push(...node.children.map((child) => [level + 1, child]));
  }
}

function print(pairs) {
  const nodeKeyMap = new Map();
  pairs.forEach((pair) => {
    const [nodeKey, childKey] = pair;
    let childNode = null;
    if (!nodeKeyMap.has(childKey)) {
      childNode = new Node(childKey);
      nodeKeyMap.set(childKey, childNode);
    } else {
      childNode = nodeKeyMap.get(childKey);
    }

    let node = null;
    if (!nodeKeyMap.has(nodeKey)) {
      node = new Node(nodeKey);
      nodeKeyMap.set(nodeKey, node);
    } else {
      node = nodeKeyMap.get(nodeKey);
    }
    node.addChild(childNode);
  });

  nodeKeyMap.forEach((node) => {
    if (node.isLeaf()) {
      nodeKeyMap.delete(node.value);
      return;
    }
    node.children.forEach((child) => {
      if (nodeKeyMap.has(child.value)) nodeKeyMap.delete(child.value);
    });
  });
  const root = Array.from(nodeKeyMap.entries())[0][1];
  printTreeAsString(root);
}

class Node {
  constructor(val) {
    this.value = val;
    this.children = [];
  }
  addChild(node) {
    if (!node) throw new Error("Node is required");
    this.children.push(node);
    return this;
  }
  isLeaf() {
    return !this.children.length;
  }
}

print([
  ["O", "W"],
  ["A", "B"],
  ["A", "C"],
  ["X", "A"],
  ["B", "O"],
]);

// X
// -A
// --B
// ---O
// --C
