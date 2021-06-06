export function stairCase(stairsNum) {
  if (!Number.isInteger(stairsNum) || stairsNum <= 0)
    throw new Error("stairCase() requires valid stairs number");
  let result = [];

  const climbCosts = [1, 2];
  const climbRecursive = (currentSum = 0, current = []) => {
    if (currentSum > stairsNum) {
      return;
    } else if (currentSum === stairsNum) {
      result.push([...current]);
      return;
    }

    climbCosts.forEach((c) => {
      current.push(c);
      climbRecursive(currentSum + c, current);
      current.pop();
    });
  };

  climbRecursive();

  return result;
}


