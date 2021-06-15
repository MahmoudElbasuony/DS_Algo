function sort(arr) {
  if (!arr || !(arr instanceof Array))
    throw new Error("quick sort required valid array!");
  if (!arr.length) return arr;

  const newArr = [...arr];
  for (let i = 1; i < newArr.length; i++) {
    let currentIndx = i;
    while (
      newArr[currentIndx] !== undefined &&
      newArr[currentIndx] < newArr[currentIndx - 1]
    ) {
      [newArr[currentIndx], newArr[currentIndx - 1]] = [
        newArr[currentIndx - 1],
        newArr[currentIndx],
      ];
      currentIndx--;
    }
  }

  return newArr;
}


console.log(sort([3,5,0,1,2,4]));