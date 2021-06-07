// Breadth first traversal

function bfs(root) {
  const result = [];
  if (!root) return result;

  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    result.push(current.value);
    if (current.left) 
      queue.push(current.left);
    if (current.right) 
      queue.push(current.right);
  }
  return result;
}

const result = bfs({
  value: 100,
  left: {
    value: 50,
    left: {
      value: 25,
      left: null,
      right: null,
    },
    right: {
      value: 75,
      left: null,
      right: null,
    },
  },
  right: {
    value: 350,
    left: {
      value: 200,
      left: null,
      right: null,
    },
    right: {
      value: 500,
      left: null,
      right: null,
    },
  },
});

console.log(result);
