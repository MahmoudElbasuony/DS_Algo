export function maximumSubArraySum(array) {
  let sum = 0;
  let largestSubArraySum = 0;
  let largestSubArrayStartIndx = 0;
  let largestSubArrayEndIndx = 0;

  for (let i = 0; i < array.length; i++) {
    sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      if (sum > largestSubArraySum) {
        largestSubArrayStartIndx = i;
        largestSubArrayEndIndx = j;
        largestSubArraySum = sum;
      }
    }
  }

  
  return{
   toArray : () => array.slice(largestSubArrayStartIndx, largestSubArrayEndIndx + 1),
   sum : ()=> largestSubArraySum
  } 
}

// https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/s

export function maximumSubArraySumDp(){
    throw new Error('Not implemented');
}