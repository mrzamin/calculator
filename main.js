//Grab DOM elements so we can modify them.
let display = document.querySelector(".display");
let currentDisplayedNum = document.querySelector(".currentNum");
let previousDisplayedNum = document.querySelector(".previousNum");
let digitBtns = document.querySelectorAll(".digit");
let operatorBtns = document.querySelectorAll(".operator");
let clearBtn = document.querySelector(".clear");
let percentBtn = document.querySelector(".percent");
let decimalBtn = document.querySelector(".decimal");
let equalsBtn = document.querySelector(".equals");
let changeSignBtn = document.querySelector(".changeSign");

//Sets global variables.
let currentNum = "";
let previousNum = "";
let operator = "";

//Listen anytime the equals btn is pressed.
equalsBtn.addEventListener("click", () => {
  if (previousNum != "" && currentNum != "") {
    operate();
  }
});

//Listen anytime a digit btn is pressed.
digitBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayCurrentNum(e.target.textContent);
  });
});

//Fires when a digit btn is pressed. Appends digit to current num as long as current num is <= 11.
function displayCurrentNum(digit) {
  if (previousNum != "" && currentNum != "" && operator === "") {
    previousNum = "";
    currentDisplayedNum.textContent = currentNum;
  }
  if (currentNum.length <= 11) {
    currentNum += digit;
    currentDisplayedNum.textContent = currentNum;
  }
}

//Listen anytime an operator btn is pressed.
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    updateNumbers(e.target.textContent);
  });
});

//Listen anytime the decimal button is pressed.
decimalBtn.addEventListener("click", addDecimal);

function addDecimal() {
  if (!currentNum.includes(".")) {
    currentNum += ".";
    currentDisplayedNum.textContent = currentNum;
  } else {
    decimalBtn.setAttribute("disabled");
  }
}

//Fires when an operator btn is clicked. Sets the current operator.
function updateOperator(text) {
  operator = text;
  previousDisplayedNum.textContent = previousNum + "" + operator;
  currentDisplayedNum.textContent = "";
  currentNum = "";
}

function updateNumbers(optBtn) {
  if (previousNum === "") {
    previousNum = currentNum;
    updateOperator(optBtn);
  } else if (currentNum === "") {
    updateOperator(optBtn);
  } else {
    operate();
    operator = optBtn;
    currentDisplayedNum.textContent = "";
    previousDisplayedNum.textContent = previousNum + "" + operator;
  }
}

//Listens when +/- btn is clicked.
changeSignBtn.addEventListener("click", changeSign);

//changes the sign of the current num.
function changeSign() {
  currentNum *= -1;
  currentDisplayedNum.textContent = currentNum;
}

//Listens whenever clear btn is clicked.
clearBtn.addEventListener("click", clearCalc);

//Fires when clear btn is pressed. Clears the calculator.

function clearCalc() {
  previousNum = "";
  currentNum = "";
  previousDisplayedNum.textContent = "";
  currentDisplayedNum.textContent = "0";
  operator = "";
}

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
      previousNum = add(previousNum, currentNum);
      break;
    case "-":
      previousNum = subtract(previousNum, currentNum);
      break;
    case "*":
      previousNum = multiply(previousNum, currentNum);
      break;
    case "/":
      if (currentNum <= 0) {
        displayErrorMsg();
        return;
      }
      previousNum = divide(previousNum, currentNum);
      break;
  }
  previousNum = roundAnswer(previousNum);
  previousNum = previousNum.toString();
  displayAnswer();
}

function displayAnswer() {
  if (previousNum.includes("Divided by zero") || previousNum.length <= 12) {
    currentDisplayedNum.textContent = previousNum;
  } else {
    currentDisplayedNum.textContent = previousNum.slice(0, 12) + "...";
  }
  previousDisplayedNum.textContent = "";
  operator = "";
  currentNum = "";
}

function roundAnswer(answer) {
  return Math.round(answer * 100000) / 100000;
}

function displayErrorMsg() {
  previousNum = "Stop dividing by 0!";
  console.log(previousNum);
  currentNum = "";
  operator = "";
  previousDisplayedNum.textContent = "";
  currentDisplayedNum.textContent = previousNum;
}

//Add event listener to window that listens to any keypress.
window.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
  e.preventDefault();
  if (e.key >= 0 && e.key <= 9) {
    displayCurrentNum(e.key);
  }
  if (
    e.key === "Enter" ||
    (e.key === "=" && currentNum != "" && previousNum != "")
  ) {
    operate();
  }
  if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
    updateNumbers(e.key);
  }
  if (e.key === "x" || e.key === "X") {
    updateNumbers("*");
  }
  if (e.key === ".") {
    addDecimal();
  }
}
