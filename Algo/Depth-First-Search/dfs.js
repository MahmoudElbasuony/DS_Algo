export function depthFirstSearch(root) {
  const dfsRecursive = (node, callback) => {
    if (callback) callback(node.key);
    if (node.left) dfsRecursive(node.left, callback);
    if (node.right) dfsRecursive(node.right, callback);
  };

  return {
    traverse: (callback) => {
      dfsRecursive(root, callback);
    },
  };
}
