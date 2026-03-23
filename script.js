let firstNumber = null;
let currentOperator = null;
let shouldResetDisplay = false;

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

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return addNum(num1, num2);
    case "-":
      return subtractNum(num1, num2);
    case "*":
      return multiplyNum(num1, num2);
    case "/":
      return divideNum(num1, num2);
  }
}

const display = document.getElementById("display");

document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key)) {
    if (display.textContent === "0" || shouldResetDisplay) {
      display.textContent = e.key;
      shouldResetDisplay = false;
    } else {
      if (display.textContent.length < 10) {
        display.textContent += e.key;
      }
    }
  } else if (e.key === "Backspace") {
    display.textContent = display.textContent.slice(0, -1) || "0";
  } else if (e.key === "Enter" || e.key === "=") {
    if (shouldResetDisplay || currentOperator == null || firstNumber == null)
      return;
    const secondNumber = Number(display.textContent);
    const result = operate(currentOperator, firstNumber, secondNumber);
    if (typeof result === "number") {
      display.textContent = parseFloat(result.toFixed(10));
    } else {
      display.textContent = result;
    }
    shouldResetDisplay = true;
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    if (shouldResetDisplay) {
      currentOperator = e.key;
      return;
    }

    const secondNumber = Number(display.textContent);

    if (firstNumber !== null) {
      firstNumber = operate(currentOperator, firstNumber, secondNumber);
    } else {
      firstNumber = secondNumber;
    }
    currentOperator = e.key;
    shouldResetDisplay = true;
  }
});

const numberButtons = document.querySelectorAll("[data-number]");

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (display.textContent === "0" || shouldResetDisplay) {
      display.textContent = e.target.dataset.number;
      shouldResetDisplay = false;
    } else {
      if (display.textContent.length < 10) {
        display.textContent += e.target.dataset.number;
      }
    }
  });
});

const operatorButtons = document.querySelectorAll("[data-operator]");

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (shouldResetDisplay) {
      currentOperator = e.target.dataset.operator;
      return;
    }
    if (firstNumber !== null) {
      const secondNumber = Number(display.textContent);
      firstNumber = operate(currentOperator, firstNumber, secondNumber);
    } else {
      firstNumber = Number(display.textContent);
    }
    currentOperator = e.target.dataset.operator;
    shouldResetDisplay = true;
  });
});

const equals = document.getElementById("equals");
equals.addEventListener("click", () => {
  if (shouldResetDisplay || currentOperator == null || firstNumber == null)
    return;
  const secondNumber = Number(display.textContent);
  const result = operate(currentOperator, firstNumber, secondNumber);
  if (typeof result === "number") {
    display.textContent = parseFloat(result.toFixed(10));
  } else {
    display.textContent = result;
  }
  shouldResetDisplay = true;
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  display.textContent = "0";
  firstNumber = null;
  currentOperator = null;
  shouldResetDisplay = false;
});

const del = document.getElementById("del");
del.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1) || "0";
});

const decimal = document.querySelector("[data-decimal]");
decimal.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
});
