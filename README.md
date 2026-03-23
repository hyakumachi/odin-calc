# 🧮 Calculator

A simple, fully functional calculator built with HTML, CSS, and vanilla JavaScript. This project was built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript Fundamentals curriculum.

---

## 📸 Preview

<img width="500" height="782" alt="image" src="https://github.com/user-attachments/assets/c2306b3e-4963-412a-941b-6864825d9706" />


---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [How to Use](#how-to-use)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [What I Learned](#what-i-learned)
- [Acknowledgements](#acknowledgements)

---

## About

This calculator allows users to perform basic arithmetic operations directly in the browser. It supports both on-screen button input and keyboard input, making it easy and fast to use. Built from scratch without any libraries or frameworks — just plain HTML, CSS, and JavaScript.

---

## ✨ Features

- **Basic operations** — addition, subtraction, multiplication, and division
- **Chained calculations** — pressing an operator after a full equation evaluates the result first before continuing
- **Keyboard support** — use number keys, operators (`+`, `-`, `*`, `/`), `Enter` or `=` for equals, and `Backspace` to delete
- **Decimal input** — supports floating point numbers, prevents duplicate decimal points
- **Rounded results** — long decimals are rounded to avoid display overflow
- **Divide by zero protection** — displays an error message instead of crashing
- **Clear button** — resets the calculator to its initial state
- **Delete button** — removes the last entered digit
- **Consecutive operator prevention** — pressing an operator multiple times in a row only updates the operator, no unintended calculations
- **Fresh start after result** — typing a digit after a result starts a new calculation instead of appending

---

## 🖱️ How to Use

### On-Screen Buttons

1. Click a number button to enter a digit
2. Click an operator button (`÷`, `×`, `−`, `+`) to select an operation
3. Enter the second number
4. Click `=` to see the result
5. Click `Clear` to reset, or `Del` to delete the last digit

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0–9` | Enter digits |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last digit |

---

## 🛠️ Technologies Used

- **HTML5** — structure and semantic markup
- **CSS3** — styling, layout with Flexbox, hover and active states
- **JavaScript (Vanilla)** — DOM manipulation, event listeners, calculator logic

---

## 📁 Project Structure

```
calculator/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
└── script.js       # Calculator logic and event handling
```

---

## 📚 What I Learned

- How to manage application **state** using variables (`firstNumber`, `currentOperator`, `shouldResetDisplay`)
- How to use `data-*` attributes to pass values from HTML to JavaScript
- How to handle both **click** and **keyboard** events for the same actions
- How to prevent edge cases like divide by zero, consecutive operators, and leading zeros
- How `String.slice()`, `isNaN()`, `parseFloat()`, and `toFixed()` work in practice
- The importance of **debugging with `console.log()`** to understand program flow

---

## 🙏 Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) — for the project brief and curriculum
- [MDN Web Docs](https://developer.mozilla.org/) — for JavaScript and CSS references

---

© 2026 100machi
