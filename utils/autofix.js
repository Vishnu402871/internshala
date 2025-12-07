// utils/autofix.js

function addMissingSemicolons(code) {
  return code.split("\n").map(line => {
    const trimmed = line.trim();

    if (!trimmed) return line;

    if (
      !trimmed.endsWith(";") &&
      !trimmed.endsWith("{") &&
      !trimmed.endsWith("}") &&
      !trimmed.startsWith("//") &&
      !trimmed.includes("function") &&
      !trimmed.includes("if") &&
      !trimmed.includes("else") &&
      !trimmed.includes("for") &&
      !trimmed.includes("while")
    ) {
      return line.trim() + ";";
    }
    return line;
  }).join("\n");
}

function fixIndentation(code) {
  let indent = 0;

  return code.split("\n").map(line => {
    let trimmed = line.trim();

    if (!trimmed) return "";

    if (trimmed.startsWith("}")) indent -= 2;

    const corrected = " ".repeat(indent) + trimmed;

    if (trimmed.endsWith("{")) indent += 2;

    return corrected;
  }).join("\n");
}

function removeExtraSpaces(code) {
  return code
    .replace(/[ ]{2,}/g, " ")
    .replace(/\t+/g, "  ")
    .trim();
}

function fixBrackets(code) {
  const stack = [];
  const openBrackets = "({[";
  const closeBrackets = ")}]";

  for (let char of code) {
    if (openBrackets.includes(char)) stack.push(char);
    if (closeBrackets.includes(char)) stack.pop();
  }

  let fixed = code;

  while (stack.length) {
    const last = stack.pop();
    const index = openBrackets.indexOf(last);
    fixed += closeBrackets[index]; 
  }

  return fixed;
}

export default function autoFix(code) {
  let output = code;

  output = removeExtraSpaces(output);
  output = addMissingSemicolons(output);
  output = fixIndentation(output);
  output = fixBrackets(output);

  return output;
}
