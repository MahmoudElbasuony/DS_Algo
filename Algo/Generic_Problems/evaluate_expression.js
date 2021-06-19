function evaluate(exp) {
  if (!exp || !(typeof exp === "string") || !exp.length)
    throw new Error("require valid not empty string");

  const exp_parts = [];
  let part = "";
  if (exp[0] === "-" || exp[0] === "+") part = "0";

  let currentOperation = undefined;
  for (let i = 0; i < exp.length; i++) {
    if (Number.isInteger(Number(exp[i]))) {
      part += exp[i];
    } else {
      exp_parts.push(Number(part));
      part = "";
      if (currentOperation) {
        const operand2 = Number(exp_parts.pop());
        const operand1 = Number(exp_parts.pop());
        let val = eval_expression(operand1, operand2, currentOperation);
        exp_parts.push(val);
        currentOperation = undefined;
      }

      if (exp[i] === "*" || exp[i] === "/") {
        currentOperation = exp[i];
      } else {
        exp_parts.push(exp[i]);
      }
    }
  }

  if (part.length) {
    exp_parts.push(Number(part));
    part = "";
  }

  if (currentOperation && exp_parts.length > 1) {
    const operand2 = exp_parts.pop();
    const operand1 = exp_parts.pop();
    const val = eval_expression(operand1, operand2, currentOperation);
    exp_parts.push(val);
    currentOperation = undefined;
  }

  while (exp_parts.length > 1) {
    const operand1 = exp_parts.shift();
    const operation = exp_parts.shift();
    const operand2 = exp_parts.shift();
    exp_parts.unshift(eval_expression(operand1, operand2, operation));
  }

  return exp_parts.pop();
}

function eval_expression(operand1, operand2, operation) {
  let val = NaN;
  switch (operation) {
    case "*":
      val = Number(operand1) * Number(operand2);
      break;
    case "/":
      val = Number(operand1) / Number(operand2);
      break;
    case "+":
      val = Number(operand1) + Number(operand2);
      break;
    case "-":
      val = Number(operand1) - Number(operand2);
      break;
    default:
      val = NaN;
  }
  return val;
}

console.log(evaluate("1-2*4/2+5*9"));
