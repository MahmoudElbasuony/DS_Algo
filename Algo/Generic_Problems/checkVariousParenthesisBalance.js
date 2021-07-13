function checkBalance(str) {
  const isOpen = (c) => c === "[" || c === "{" || c === "(";
  const getClose = (c) =>
    c === "[" ? "]" : c === "{" ? "}" : c === "(" ? ")" : "";
  const stack = [];
  stack.peek = function () {
    return this[this.length - 1];
  };
  for (let c of str) {
    if (isOpen(c)) {
      stack.push(c);
    } else if (c === getClose(stack.peek())) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(checkBalance("(){{{{}}}"));
