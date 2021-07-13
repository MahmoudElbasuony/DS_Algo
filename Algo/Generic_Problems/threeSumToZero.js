function threeSum(arr) {
  let exists = false;

  const checkRecursive = (subarr = arr, sum = 0, level = 0, current = []) => {
    if (level === 3 && sum === 0) {
      exists = true;
      return;
    }
    for (let element of subarr) {
      current.push(element);
      checkRecursive(subarr.filter((e) => !current.some((x) => x == e)), sum + element, level + 1, current);
      current.pop();
      if (exists) break;
    }
  };

  checkRecursive();

  return exists;
}
console.log(threeSum([1, 1, -8, -2]));
