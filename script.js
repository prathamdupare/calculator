function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a *b
}

function divide(a,b) {
    if(b == 0) {
        return "Oops"
    } else return (a/b)
}

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, secondNumber,operator) {
    const operators = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide,
      };

      if(operator in operators) {
        return operators[operator](firstNumber, secondNumber)
      }
      else return "Check Your operator."
}

console.log(operator(1,2,'+'))