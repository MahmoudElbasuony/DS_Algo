function ckeckParenthesisBalance(str, open, close) {
  const stack = [];
  let errors = [];
  [...str].forEach((el, i) => {
    if (el === open) stack.push([open, i]);
    else if (el === close) {
      if (stack[stack.length - 1] && stack[stack.length - 1][0] === open)
        stack.pop();
      else {
        stack.push(["#", i]);
      }
    }
  });
  return stack.length
    ? stack.length +
        " error(s) found : \n" +
        stack.map((e) => "error at index : " + e[1] + ' => ' + e[0]).join("\n")
    : "valid";
}

console.log(ckeckParenthesisBalance("()(", "(", ")"));
