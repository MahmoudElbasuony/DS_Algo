export function permutationWithoutRepition(arr, slots) {
  const finalResult = [];
  const permRecursive = (subarr, currentPerm = []) => {
    if (currentPerm.length === slots || subarr.length === 0) {
      finalResult.push([...currentPerm]);
      return;
    }
    subarr.forEach((el, index) => {
      currentPerm.push(el);
      permRecursive(
        subarr.filter((e) => e !== el),
        currentPerm
      );
      currentPerm.pop();
    });
  };
  permRecursive(arr);
  return finalResult;
}
