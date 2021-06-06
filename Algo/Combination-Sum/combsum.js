export function combinationSum(arr, target) {
  const finaResult = [];

  const recursive = (subarr = arr, currentSum = 0, current = []) => {
    if (currentSum == target) {
      finaResult.push([...current]);
      return;
    } else if (currentSum > target) {
      return;
    }
    subarr.forEach((el, indx) => {
      current.push(el);
      recursive(arr.slice(indx), currentSum + el, current, indx);
      current.pop();
    });
  };

  recursive(arr);
  return finaResult;
}
