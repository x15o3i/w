let expression = "";

function insert(char) {
  expression += char;
  document.getElementById("screen").value = expression;
}

function clearScreen() {
  expression = "";
  document.getElementById("screen").value = "";
}

function calculate() {
  try {
    expression = eval(expression);
    document.getElementById("screen").value = expression;
  } catch (e) {
    clearScreen();
  }
}
