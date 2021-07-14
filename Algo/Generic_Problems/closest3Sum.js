function threeSumClosest(originalArr, target) {
  const arr = originalArr.slice(0);
  arr.sort((a, b) => a - b);
  let result;
  let gap = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 2; i++) {
    const firstElement = arr[i];
    if (firstElement === arr[i - 1]) continue;
    let left = i + 1,
        right = arr.length - 1;
    const reminder = target - firstElement;
    while (left < right) {
      const sumOfTwo = arr[left] + arr[right];
      const sumOfThree = sumOfTwo + firstElement;
      let tempGap = Math.abs(target - sumOfThree);
      if(tempGap < gap){
          gap = tempGap;
          result = sumOfThree;
      }
      if (sumOfTwo === reminder) return target;
      else if (sumOfTwo < reminder) left++;
      else right--;
    }
  }

  return result;
}


console.log(threeSumClosest([-1,2,1,-4], 1));