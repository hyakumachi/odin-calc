document.getElementById("year").textContent = new Date().getFullYear();


function addNum(num1, num2) {
    return num1 + num2;
}

function subtractNum(num1, num2) {
    return num1 - num2;
}

function multiplyNum(num1, num2) {
    return num1 * num2;
}

function divideNum(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operator").value;
    let result;
}

// ...existing code...

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetDisplay = false;

function operate(operator, num1, num2) {
    switch(operator) {
        case '+': return addNum(num1, num2);
        case '-': return subtractNum(num1, num2);
        case '×': return multiplyNum(num1, num2);
        case '÷': return divideNum(num1, num2);
        default: return null;
    }
}

// Add event listeners to all buttons
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('button');

// Implement click handlers for numbers, operators, equals, clear, and delete