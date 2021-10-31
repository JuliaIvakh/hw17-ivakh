function exponentiation(firstNum, secondNum) {
  const result = firstNum ** secondNum;
  alert(result);
}

function multiplay(firstNum, secondNum) {
  const result = firstNum * secondNum;
  alert(result);
}

function division(firstNum, secondNum) {
  const result = firstNum / secondNum;
  alert(result);
}

function modulo(firstNum, secondNum) {
  const result = firstNum % secondNum;
  alert(result);
}

function mainFunction(callback) {
  const firstNum = +prompt("Enter any number");
  const secondNum = +prompt("Enter any number for a power");
  callback(firstNum, secondNum);
}

mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);
