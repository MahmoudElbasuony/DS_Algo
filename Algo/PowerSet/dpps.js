export function dpPowerSet(arr) {
  const finalResult = [[]];

  const recursive = (subarr = arr, current = []) => {
    subarr.forEach((el, indx) => {
      current.push(el);
      finalResult.push([...current]);
      recursive(subarr.slice(indx + 1), current);
      current.pop();
    });
  };

  recursive();
  return finalResult;
}
