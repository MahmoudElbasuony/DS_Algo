export function longestIncreasingSequence(arr) {
  
  const counterSet = Array(arr.length).fill(1);
  let previousIndex = 0;
  let currentIndex = 1;

  while(currentIndex < counterSet.length){

    if(arr[currentIndex] > arr[previousIndex]){
        const newCounter = counterSet[previousIndex] + 1;
        if(newCounter > counterSet[currentIndex]){
            counterSet[currentIndex] = newCounter;
        }
    }

    previousIndex++;

    if(previousIndex == currentIndex){
        currentIndex++;
        previousIndex = 0;
    }
  }

  let longestLength = Math.max(...counterSet);
  return longestLength;
}
