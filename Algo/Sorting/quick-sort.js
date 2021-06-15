function sort(arr) {
  if (!arr || !(arr instanceof Array))
    throw new Error("quick sort required valid array!");
  if (!arr.length) return arr;

  const swap = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  const partition = (l, h) => {
    let i = l + 1;
    let j = h;
    let pivot = arr[l];

    while (i < j) {
      while (arr[i] <= pivot) i++;
      while (arr[j] > pivot) j--;
      if (i < j) swap(i, j);
    }

    swap(l, j);
    return j;
  };

  const quick = (start, end) => {
    if (start < end) {
      const mid = partition(start, end);
      quick(start, mid - 1);
      quick(mid + 1, end);
    }
  };

  quick(0, arr.length - 1);

  return arr;
}

console.log(sort([6, 0,0, 5, 7, 4, 3, 1]));
