////Create global variables.
let num1;
let num2;
let operator;

//Grab buttons.
let display = document.querySelector(".display");
let acBtn = document.querySelector(".AC");
let plusMinusBtn = document.querySelector(".plus-minus");
let percentBtn = document.querySelector(".percent");
let divideBtn = document.querySelector(".divide");
let sevenBtn = document.querySelector(".seven");
let eightBtn = document.querySelector(".eight");
let nineBtn = document.querySelector(".nine");
let multiplyBtn = document.querySelector(".multiply");
let fourBtn = document.querySelector(".four");
let fiveBtn = document.querySelector(".five");
let sixBtn = document.querySelector(".six");
let subtractBtn = document.querySelector(".subtract");
let oneBtn = document.querySelector(".one");
let twoBtn = document.querySelector(".two");
let threeBtn = document.querySelector(".three");
let addBtn = document.querySelector(".add");
let zeroBtn = document.querySelector(".zero");
let decimalBtn = document.querySelector(".decimal");
let equalsBtn = document.querySelector(".equals");

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
