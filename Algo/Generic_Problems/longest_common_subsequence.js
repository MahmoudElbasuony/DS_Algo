function longestCommonSubSequence(str1, str2) {
  if (!str1.length || !str1.length) return "";
  const lcs = Array(str1.length + 1)
    .fill(null)
    .map(() => Array(str2.length + 1).fill(null));
  for (let i = 0; i <= str1.length; i++) lcs[str1.length][i] = 0;
  for (let i = 0; i <= str2.length; i++) lcs[i][str2.length] = 0;

  let matchedParts = [];
  for (let i = lcs.length - 2; i >= 0; i--) {
    for (let j = lcs[0].length - 2; j >= 0; j--) {
      if (str1[i] === str2[j]) {
        lcs[i][j] = 1 + lcs[i + 1][j + 1];
        matchedParts.push(str1[i]);
      } else {
        lcs[i][j] = Math.max(lcs[i + 1][j], lcs[i][j + 1]);
      }
    }
  }

  if (!lcs[0][0]) return "";

  return matchedParts.reduce((ac, c) => c + ac , "");
}

console.log(longestCommonSubSequence("ADBEH", "CAEH"));
