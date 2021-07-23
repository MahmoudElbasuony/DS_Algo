function rainTerraces(arr) {
  if (arr.length === 0) return 0;
  let counter = 0;

  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    while (i < arr.length - 1 && arr[i] <= arr[i + 1]) i++;
    while (j >= 0 && arr[j] <= arr[j - 1]) j--;
    for (let p = i; i < j && p <= j; p++) {
      if (arr[p] !== 0) {
          arr[p]--;
          continue;
      }
      else counter++;
    }
  }

  return counter;
}

// console.log(rainTerraces([2,0,2]));




var permute = function(nums) {
    const result = [];
    const rec = (current=[])=>{
        if(current.length === nums.length){
            result.push([...current]);
            return;
        }
        nums.forEach(n=>{
            current.push(n);
            rec(current);
            current.pop();
        });
    }
    return result;
};
console.log(permute([1,2,3]));