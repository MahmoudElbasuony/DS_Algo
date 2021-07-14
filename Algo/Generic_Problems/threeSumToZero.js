var threeSumBacktracking = function (arr) {
  if (arr.length < 3) return [];
  let result = new Set();
  arr.sort((a, b) => a - b);
  const checkRecursive = (subarr = arr, sum = 0, level = 0, current = []) => {
    if (level === 3) {
      if (sum === 0) {
        const sub_result = [...current];
        sub_result.sort((a, b) => a - b);
        result.add(sub_result.join(","));
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

  return [...result].map((r) => r.split(",").map(Number));
};

var threeSumBruteForce = function (orignalArr) {
  if (orignalArr.length < 3) return [];
  const arr = orignalArr.slice(0);
  arr.sort((a,b)=> a - b);
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const firstElement = arr[i];
    if(firstElement === arr[i-1]) continue;
    let left = i + 1, right = arr.length - 1;
    let reminaing = 0 - firstElement;
    while(left < right){
      let sum = arr[left] + arr[right];
      if(sum < reminaing){
        left++;
      } else if(sum > reminaing){
        right--;
      } else{
        result.push([firstElement, arr[left] , arr[right]]);
        while(left < right && arr[left] === arr[left + 1]) left++;
        while(left < right && arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
   
  return result;
};

console.log(threeSumBruteForce([-1,0,1,0]));
