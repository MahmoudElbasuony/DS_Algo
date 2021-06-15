const merge = (leftArr, rightArr) => {
  let i = 0,
    j = 0;
  let result = [];
  while (i < leftArr.length || j < rightArr.length) {
    if (i === leftArr.length && j < rightArr.length) {
      result.push(rightArr[j]);
      j++;
      continue;
    } else if (j === rightArr.length && i < leftArr.length) {
      result.push(leftArr[i]);
      i++;
      continue;
    }

    if (leftArr[i] <= rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else if (leftArr[i] > rightArr[j]) {
      result.push(rightArr[j]);
      j++;
    } else {
      result.push(leftArr[i]);
      result.push(rightArr[j]);
      i++;
      j++;
    }
  }
  return result;
};

function sort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftPart = arr.slice(0, mid);
  let rightPart = arr.slice(mid, arr.length);
  let leftSorted = sort(leftPart);
  let rightSorted = sort(rightPart);
  return merge(leftSorted, rightSorted);
}

console.log(sort([6, 0, 0, 5, 7, 4, 3, 1]));
