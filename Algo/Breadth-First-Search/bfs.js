export function breadthFirstSearch(root) {
  const bfsRecursive = (node, callback) => {
    const queue = [];
    queue.unshift(node);

    while (queue.length) {
      // visit current node
      const currentNode = queue.shift();
      if (callback) callback(currentNode.key);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  };

  return {
    traverse: (callback) => {
      bfsRecursive(root, callback);
    },
  };
}
