//Grab buttons.
let display = document.querySelector(".display");
let digitBtns = document.querySelectorAll(".digit");
let acBtn = document.querySelector(".AC");
let plusMinusBtn = document.querySelector(".plus-minus");
let percentBtn = document.querySelector(".percent");
let divideBtn = document.querySelector(".divide");
let multiplyBtn = document.querySelector(".multiply");
let subtractBtn = document.querySelector(".subtract");
let addBtn = document.querySelector(".add");
let decimalBtn = document.querySelector(".decimal");
let equalsBtn = document.querySelector(".equals");

display.textContent = "";
let values = [];
let num1;
let num2;
let operator;

//Executes the popDisplay fcn when a digit is clicked.
digitBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    popDisplay(btn.textContent);
  });
});

//Adds an additional digit to display when button is clicked.
function popDisplay(num1) {
  display.textContent += num1;
  logValues(display.textContent);
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
