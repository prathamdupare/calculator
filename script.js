function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Oops";
    } else {
        return a / b;
    }
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result;


function operate(firstNumber, secondNumber, operator) {
    const operators = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide,
    };

    if (operator in operators) {
        return operators[operator](firstNumber, secondNumber);
    } else {
        return "Check Your operator.";
    }
}

function updateDisplay() {
    if (operator === "" && secondNumber === "") {
        display.innerHTML = `${firstNumber}`;
    } else if (operator !== "") {
        display.innerHTML = `${firstNumber} ${operator} ${secondNumber}`;
    } else {
        display.innerHTML = `${firstNumber}${operator}`;
    }
}





let display = document.querySelector('.screen');

let buttons = document.querySelectorAll('.buttons button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('digit')) {
            if (operator === "") {
                firstNumber += e.target.innerHTML;
            } else {
                secondNumber += e.target.innerHTML;
            }
            updateDisplay();

        } else if (e.target.classList.contains('operation')) {
            if (firstNumber !== "" && secondNumber !== "") {
                const num1 = parseFloat(firstNumber);
                const num2 = parseFloat(secondNumber);
                result = operate(num1, num2, operator);
                display.innerHTML = result;
                firstNumber = result.toString();
                secondNumber = "";
                updateDisplay();
            }
            operator = e.target.innerHTML;
        } else if (e.target.id === 'equal') {
            if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
                const num1 = parseFloat(firstNumber);
                const num2 = parseFloat(secondNumber);
                result = operate(num1, num2, operator);
                display.innerHTML = result;
                firstNumber = result.toString();
                secondNumber = "";
                operator = "";

            }
        } else if (e.target.id === 'clear') {
            firstNumber = "";
            secondNumber = "";
            operator = "";
            display.innerHTML = "";
            console.log("pressed clear");
        } else if (e.target.id === 'back') {
            if (secondNumber = "") {
                firstNumber = "";
                updateDisplay();
            } else {
                secondNumber = "";
                result = "";
                display.innerHTML = result;
                // operator = "";
                // display.innerHTML = "";
                updateDisplay();
                console.log("pressed back");
            }
            // firstNumber = "";

        }
    });
});



