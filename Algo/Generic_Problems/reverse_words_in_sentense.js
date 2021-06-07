function reverse_words(statement) {
  if (!(typeof statement === "string"))
    throw new Error("statement should be string");
  if (!statement.trim()) return statement;
  const statmentParts = statement.split(" ");
  if (!statmentParts.length) return statement;
  let result = statmentParts.pop();
  while (statmentParts.length > 1) {
    result += " " + statmentParts.pop();
  }
  if (statmentParts.length) result += " " + statmentParts.pop();
  return result;
}

console.log(reverse_words("kkk lll"));
