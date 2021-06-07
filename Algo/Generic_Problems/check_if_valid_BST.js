function checkIsValidBST(root) {
  const checkValidityRecursive = (node, min, max) => {
    if (!node) return true;
    if (node.value < min || node.value > max) return false;
    return (checkValidityRecursive(node.left, min, node.value) && checkValidityRecursive(node.right, node.value, max));
  };

  return checkValidityRecursive(root, -Infinity, Infinity);
}

const isValid = checkIsValidBST({
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

console.log(isValid);
