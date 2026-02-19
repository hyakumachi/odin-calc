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

const display = document.getElementById("display");

document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key)) {
    if (display.textContent === "0") {
      display.textContent = e.key;
    } else {
      display.textContent += e.key;
    }
  } else if (e.key === "Backspace") {
    display.textContent = display.textContent.slice(0, -1) || "0";
  }
});

const numberButtons = document.querySelectorAll("[data-number]");

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
      if (display.textContent === "0") {
        display.textContent = e.target.dataset.number;
      } else {
        display.textContent += e.target.dataset.number;
      }
  });
});

const operatorButtons = document.querySelectorAll("[data-operator]");


operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        display.textContent += e.target.dataset.operator;
    })
})

document.addEventListener("keydown", (e) => {
  console.log(e.key);
});