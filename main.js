//Grab buttons.
let display = document.querySelector(".display");
let digitBtns = document.querySelectorAll(".digit");
let operatorBtns = document.querySelectorAll(".operator");
let acBtn = document.querySelector(".AC");
let plusMinusBtn = document.querySelector(".plus-minus");
let percentBtn = document.querySelector(".percent");
let divideBtn = document.querySelector(".divide");
let multiplyBtn = document.querySelector(".multiply");
let subtractBtn = document.querySelector(".subtract");
let addBtn = document.querySelector(".add");
let decimalBtn = document.querySelector(".decimal");
let equalsBtn = document.querySelector(".equals");
console.log(operatorBtns);
//Pushes return value from logValues().
let values = [];

//I don't know how to use these yet.
let num1;
let num2;
let operator;

//Executes the popDisplay fcn when a digit is clicked.

equalsBtn.addEventListener("click", () => {
  getSecondNumber();
  operate(operator, num1, num2);
  displayResult();
});

digitBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    populateDisplay(btn.textContent);
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    getOperator(btn.textContent);
    getFirstNumber();
    clearDisplay();
  });
});

function getFirstNumber() {
  logValues(display.textContent);
  let firstNumberEntered = Number(values[values.length - 1]);
  return (num1 = firstNumberEntered);
}

function getSecondNumber() {
  logValues(display.textContent);
  let secondNumberEntered = Number(values[values.length - 1]);
  return (num2 = secondNumberEntered);
}

function getOperator(value) {
  operator = value;
  return operator;
}

function displayResult() {
  display.textContent = `${num1} ${operator} ${num2} = ${operate(
    operator,
    num1,
    num2
  )}`;
}

function clearDisplay() {
  display.textContent = "";
}

//Adds an additional digit to display when button is clicked.
function populateDisplay(num1) {
  display.textContent += num1;
}

function logValues(value) {
  values.push(value);
  console.log(values);
}

//Create functions for basic math operators.
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

//completes an operation.
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}
