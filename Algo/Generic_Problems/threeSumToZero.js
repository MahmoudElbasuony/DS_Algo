var threeSum = function (arr) {
  if (arr.length < 3) return [];
  let result = new Set();
  arr.sort((a,b)=> a - b);
  const checkRecursive = (subarr = arr, sum = 0, level = 0, current = []) => {
    if (level === 3) {
      if (sum === 0) {
        const sub_result = [...current];
        sub_result.sort((a,b)=> a- b);
        result.add(sub_result.join(','));
      }
      return;
    }
    for (let i = 0; i < subarr.length; i++) {
      const element = subarr[i];
      current.push(element);
      checkRecursive(subarr.slice(i + 1), sum + element, level + 1, current);
      current.pop();
    }
  };

  checkRecursive();

  return [...result].map(r => r.split(',').map(Number));
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
