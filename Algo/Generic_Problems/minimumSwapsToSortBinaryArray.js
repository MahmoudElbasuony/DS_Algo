// get minimum number of swaps to sort the binary array so the array's zeros to be on one side of array left/right no matter 
// and return the minimum swaps 

function arrange(arr) {
  if (arr.length <= 2 || arr.indexOf(0) < 0 || arr.indexOf(1) < 0) return 0;

  let ar1 = arr.slice();
  let lastIndx = -1;
  let swaps1 = 0, swaps2 = 0;

  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] === 1) continue;
    if(ar1[lastIndx + 1] !== ar1[i]){
        [ar1[lastIndx + 1], ar1[i]] = [ar1[i], ar1[lastIndx + 1]];
        swaps1 += i - (lastIndx + 1);
    }
    lastIndx++;
  }

  console.log(ar1);
  ar1 = arr.slice();
  lastIndx = -1;
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] === 0) continue;
    if(ar1[lastIndx + 1] !== ar1[i]){
        [ar1[lastIndx + 1], ar1[i]] = [ar1[i], ar1[lastIndx + 1]];
        swaps2 += i - (lastIndx + 1);
    }
    lastIndx++;
  }
  console.log(ar1);

  return Math.min(swaps1, swaps2);
}

console.log(arrange([0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0]));



