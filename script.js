//variables=======================
const getNumbers = document.querySelectorAll('.number-btn');
const getOperators = document.querySelectorAll('.operator');
const displayScreen = document.getElementById('displayTotal');
const clearAllBtn = document.querySelector('#clearAll');
const equalityBtn = document.querySelector('#equalBtn');

let num1 = "";
let num2 = "";
let operatorOne = "";
let operatorTwo = "";


//functions=====================

getNumbers.forEach((number) => {
    number.addEventListener('click', (event) => {
      number = event.target.value;
      showUserInput(number);
    });
  });

getOperators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
      operatorOne = event.target.value;
      if (num1 && num2) {
        calculateTotal();
      }
    });
  });

function clearDisplay(){
    displayScreen.innerText = "";
    num1 = "";
    num2 = "";
    operatorOne = "";
    operatorTwo = "";
}

clearAllBtn.addEventListener('click', clearDisplay);

equalityBtn.addEventListener('click', displayTotal);

function showUserInput (pressedNum) {
    operatorTwo = operatorOne; 
    if (!operatorOne) {
        num1 = num1.concat(pressedNum);
        displayScreen.innerText = num1;
    }

    if (operatorOne || num2) {
        if (!num2) {
        num2 = num1;
        num1 = '';
        }

        num1 = num1.concat(pressedNum);
        displayScreen.innerText = num1;
    }
}

function calculateTotal() {
    let storedNumOne = parseFloat(num1);
    let storedNumTwo = parseFloat(num2);
    
    if (operatorTwo === '+') {
        num2 = storedNumOne + storedNumTwo;
      displayTotal();
    }
    if (operatorTwo === '-') {
        num2 = storedNumTwo - storedNumOne;
      displayTotal();
    }
    if (operatorTwo === '*') {
        num2 = storedNumOne * storedNumTwo;
      displayTotal();
    }
    if (operatorTwo === '/') {
        num2 = storedNumTwo / storedNumOne;
      displayTotal();
    }
  }

function displayTotal() {
  displayScreen.innerText = num2;
  num1 = '';
}




