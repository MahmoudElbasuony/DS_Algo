function can_segment_all_string(s, dictionary) {
  if (!s || typeof s !== "string" || !s.trim()) return false;
  const dic = new Set(dictionary);
  let i = 0;
  let j = 0;
  let scopy = s;
  while (j < scopy.length) {
    if (dic.has(scopy.substring(i, j + 1))) {
      scopy = scopy.substring(j + 1);
      i = j = 0;
      continue;
    }
    else j++;
  }
  return scopy.length == 0;
}

const can = can_segment_all_string("hellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonowhellonow", ["hello", "hello", "on", "now"]);
console.log(can);