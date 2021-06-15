function nQueen(queensCount) {
  if (queensCount === 2 || queensCount === 3) return 0;
  let numberOfSolutions = 0;
  let solutions = [];

  const placeQueensRecursive = (rowNumber, colNumber, queensColumns = []) => {
    if (rowNumber > queensCount) {
      // reached to end without problem
      numberOfSolutions++;
      solutions.push([...queensColumns.map((val, indx) => `(${indx + 1}, ${val})`)]);
      return;
    }

    for (let i = 1; i <= queensCount; i++) {
      if (i === colNumber || i == colNumber + 1 || i === colNumber - 1 || queensColumns.some((e) => e === i))
        continue;
      queensColumns.push(i);
      placeQueensRecursive(rowNumber + 1, i, queensColumns);
      queensColumns.pop();
    }
  };

  for (let i = 1; i <= queensCount; i++) {
    placeQueensRecursive(2, i, [i]);
  }
  return solutions;
}

console.log(nQueen(6));
