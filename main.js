//Grab DOM elements so we can modify them.
let display = document.querySelector(".display");
let currentDisplayNum = document.querySelector(".currentNum");
let previousDisplayNum = document.querySelector(".previousNum");
let digitBtns = document.querySelectorAll(".digit");
let operatorBtns = document.querySelectorAll(".operator");
let clearBtn = document.querySelector(".clear");
let percentBtn = document.querySelector(".percent");
let decimalBtn = document.querySelector(".decimal");
let equalsBtn = document.querySelector(".equals");

//Sets global variables.
let currentNum = "";
let previousNum = "";
let operator = "";

//Listen whenever a digit btn is pressed.
digitBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayCurrentNumber(e.target.textContent);
  });
});

//Append pressed digit to current num; display current num.
function displayCurrentNumber(num) {
  if (currentNum.length <= 12) {
    currentNum += num;
    currentDisplayNum.textContent = currentNum;
  }
}

//Listen whenever an operator btn is pressed.
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    setOperator(e.target.textContent);
  });
});

//Set operator to whichever operator key is pressed.
function setOperator(opKeyPressed) {
  operator = opKeyPressed;
  updateNumbers(currentNum);
}

function updateNumbers(num) {
  previousNum = num;
  previousDisplayNum.textContent = `${previousNum} ${operator}`;
  currentNum = "";
  currentDisplayNum.textContent = "";
}

//Listens when equal sign is pressed.
equalsBtn.addEventListener("click", operate);

// function populateDisplay(digitBtnText) {
//   display.textContent += digitBtnText;
// }

// //Populate display with digits clicked.
// digitBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     populateDisplay(btn.textContent);
//   });
// });

// //Executes LogNumber when an operator btn is clicked.
// operatorBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     let currentNumber = display.textContent;
//     let currentOperator = btn.textContent;
//     logNumbers(currentNumber);
//     logOperators(currentOperator);
//     clearDisplay();
//   });
// });

// //Adds current number to the Numbers array.
// function logNumbers(currentNumber) {
//   numbers.push(currentNumber);
//   calculateAnswer();
// }

// function logOperators(currentOperator) {
//   operators.push(currentOperator);
// }

// function clearDisplay() {
//   display.textContent = "";
// }

// //Push current number into array while always keeping an array of length of 2, removing the oldest element.
// function updateArray() {
//   if (numbers.length >= 3) {
//     numbers = numbers.splice(0, 1);
//   }
// }

// function calculateAnswer() {
//   if (operators.length == 1) {
//     displayAnswer(numbers[0]);
//   } else if (numbers.length == 1) {
//     displayAnswer(numbers[0]);
//   } else if (numbers.length == 2) {
//     num1 = Number(numbers[0]);
//     num2 = Number(numbers[1]);
//     let currentOperator = operators[operators.length - 1];
//     displayAnswer(operate(currentOperator, num1, num2));
//   } else {
//     updateArray();
//   }
// }

// function displayAnswer(answer) {
//   display.textContent = answer;
// }

// console.log(operators, numbers);

//Complete basic math operations.
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

//completes an operation when equals sign is pressed.
function operate() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  switch (operator) {
    case "+":
      currentNum = add(previousNum, currentNum);
      break;
    case "-":
      currentNum = subtract(previousNum, currentNum);
      break;
    case "*":
      currentNum = multiply(previousNum, currentNum);
      break;
    case "/":
      currentNum = divide(previousNum, currentNum);
      break;
  }
  previousDisplayNum.textContent = "";
  currentDisplayNum.textContent = currentNum;
}
