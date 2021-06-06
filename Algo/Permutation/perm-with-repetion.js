export function permutationWithRepition(arr, slots) {
  const finalResult = [];
  const permRecursive = (currentPerm = []) => {
    if (currentPerm.length === slots) {
      finalResult.push([...currentPerm]);
      return;
    }
    arr.forEach((el) => {
      currentPerm.push(el);
      permRecursive(currentPerm);
      currentPerm.pop();
    });
  };
  permRecursive();
  return finalResult;
}
