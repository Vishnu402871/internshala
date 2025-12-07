// utils/helpkeywords.js

const helpDatabase = {
  "run": "Click RUN to execute the code. Output appears in the console.",
  "editor": "You can type JavaScript code in the editor section.",
  "autofix": "Auto-Fix cleans code: fixes indentation, adds semicolons, removes extra spaces.",
  "help": "Open the help panel for keyword-based assistance.",
  "semicolon": "Missing semicolons are automatically added by Auto-Fix.",
  "indentation": "Code indentation is corrected to readable format.",
  "brackets": "Auto-Fix closes unbalanced brackets/parentheses.",
  "error": "If there is an error, check the console output below.",
  "usage": "Type code → Auto-Fix → Run → Check console."
};

export function getHelp(keyword) {
  keyword = keyword.toLowerCase();

  if (helpDatabase[keyword]) {
    return helpDatabase[keyword];
  }

  return "No matching help found. Try keywords like: run, autofix, editor, help.";
}