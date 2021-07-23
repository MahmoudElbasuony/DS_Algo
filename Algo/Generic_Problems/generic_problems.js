const getCount = function (s, startIndices, endIndices) {
  const result = [];
  for (let i = 0; i < startIndices.length; i++) {
    let startIndx = startIndices[i] - 1;
    let endIndx = endIndices[i] - 1;
    let itemsCount = 0;
    if (startIndx === endIndx) {
      result.push(itemsCount);
      continue;
    }
    const substring = s.substring(startIndx, endIndx + 1);
    while (startIndx < substring.length && s[startIndx] === "*") startIndx++;
    while (endIndx > startIndx && s[endIndx] === "*") endIndx--;
    while (startIndx < endIndx) {
      if (s[startIndx] === "*") itemsCount++;
      startIndx++;
    }
    result.push(itemsCount);
  }
  return result;
};

// console.log(getCount("***|*|***|***", [1, 4], [1, 6]));

const cars_slots = function (cars, k) {
  if (k === 1 && cars.length >= 1) return k;
  const sortArr = [...cars];
  sortArr.sort((a, b) => a - b);
  let minimumLength = Infinity;
  for (let i = 0; i < sortArr.length - k; i++) {
    const start = sortArr[i];
    const end = sortArr[i + (k - 1)];
    minimumLength = Math.min(minimumLength, end - start + 1);
  }
  return minimumLength;
};

console.log(cars_slots([10, 11, 1, 6, 1000000], 2));
//1 6 10 11 100000

