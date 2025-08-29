const screen = document.querySelector("p");
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = "Error";

const numberScreen = () => {
  const numberButtons = document.querySelectorAll(".number");
  for (let i = 0; i < numberButtons.length; i++) {
    const numberButton = numberButtons[i];
    numberButton.addEventListener("click", () => {
      if (screen.innerText.length < 11) {
        if (
          screen.innerText === "+" ||
          screen.innerText === "−" ||
          screen.innerText === "×" ||
          screen.innerText === "÷"
        ) {
          screen.innerText = numberButton.innerText;
        } else {
          screen.innerText = screen.innerText + numberButton.innerText;
        }
      }
    });
  }
};

const selectOperator = () => {
  const operatorButtons = document.querySelectorAll(".operators");
  for (const operatorButton of operatorButtons) {
    operatorButton.addEventListener("click", () => {
      firstNumber = parseFloat(screen.innerText);
      screen.innerText = operatorButton.innerText;
      operator = operatorButton.innerText;
    });
  }
};

const solveOperation = () => {
  const equalButton = document.querySelector(".equal");
  equalButton.addEventListener("click", () => {
    secondNumber = parseInt(screen.innerText);
    if (operator === "+") {
      result = firstNumber + secondNumber;
    } else if (operator === "−") {
      result = firstNumber - secondNumber;
    } else if (operator === "×") {
      result = firstNumber * secondNumber;
    } else if (operator === "÷") {
      if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
      }
    }
    if (String(result).includes(".")) {
      const resultList = String(result).split("");
      while (resultList.length > 12) {
        resultList.pop();
      }
      result = resultList.join("");
      screen.innerText = result;
    } else {
      if (String(result).length > 12) {
        result = "Error";
      }
      screen.innerText = String(result);
    }

    firstNumber = parseFloat(result);
    secondNumber = 0;
  });
};

const deleteAllScreen = () => {
  const deleteAllButton = document.querySelector("#deleteAll");
  deleteAllButton.addEventListener("click", () => {
    screen.innerText = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
  });
};

const deleteOne = () => {
  const deleteOneButton = document.querySelector("#delete");
  deleteOneButton.addEventListener("click", () => {
    const screenList = screen.innerText.split("");
    screenList.pop();
    screen.innerText = screenList.join("");
  });
};

numberScreen();
selectOperator();
solveOperation();
deleteAllScreen();
deleteOne();
