function isAnagram(n1, n2) {
  const n1Str = n1.toString();
  const n2Str = n2.toString();
  if (n1Str.length != n2Str.length) return false;
  if (n1Str === n2Str) return true;
  let isAnagram = true;
  const map = new Map();
  for (let i = 0; i < n1Str.length; i++) {
    const d = n1Str[i];
    const dEntry = map.get(d);
    map.set(d, dEntry === undefined ? 1 : dEntry + 1);
  }
  for (let i = 0; i < n2Str.length; i++) {
    const d = n2Str[i];
    const dEntry = map.get(d);
    if (dEntry === undefined || dEntry === 0) {
      isAnagram = false;
      break;
    }
    else {
        map.set(d , dEntry - 1);
    }
  }
  return isAnagram;
}

console.log(isAnagram('550', '005'));
