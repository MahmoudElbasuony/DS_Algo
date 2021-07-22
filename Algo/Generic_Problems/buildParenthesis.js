var generateParenthesis = function (n) {
  const result = [];
  const recur = (open = 0, close = 0, current = [], c = 0) => {
    if (open > n || close > n || c < 0) return;
    if (current.length === n * 2 && open === close && c === 0) {
      result.push([...current].join(""));
      return;
    }

    for (let p of ["(", ")"]) {
      current.push(p);
      if (p === "(") {
        recur(open + 1, close, current, c + 1);
      } else {
        recur(open, close + 1, current, c - 1);
      }
      current.pop();
    }
  };
  recur();
  return result;
};

console.log(generateParenthesis(8));
