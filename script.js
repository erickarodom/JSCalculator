//variables=======================
let num1 = "";
let num2 = "";
let operatorOne = "";
let operatorTwo = "";

const displayScreen = document.getElementById('displayTotal');
const clearAllBtn = document.querySelector('#clearAll');
const equalityBtn = document.querySelector('#equalBtn');
const getNumbers = document.querySelectorAll('.number-btn');
const getOperators = document.querySelectorAll('.operator');


//functions=====================

  getNumbers.forEach((number) => {
    number.addEventListener('click', (event) => {
      number = event.target.value;
      showUserInput(number);
    })
  })

  getOperators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
      operatorOne = event.target.value
      if (num1 && num2) {
        calculateTotal()
      }
    })
  })

const showUserInput = (pressedNum) => {
    operatorTwo = operatorOne
    if (!operatorOne) {
        num1 += pressedNum;
        displayScreen.innerText = num1;
    }
    if (operatorOne || num2) {
        if (!num2) {
        num2 = num1;
        num1 = '';
        }
        num1 += pressedNum;
        displayScreen.innerText = num1;
        return;
    }
}


function calculateTotal() {

    let numOne = parseInt(num1)
    let numTwo = parseInt(num2)
  
    if (operatorTwo === '+') {
        num2 = numOne + numTwo
      displayTotal()
    }
    if (operatorTwo === '-') {
        num2 = numTwo - numOne
      displayTotal()
    }
    if (operatorTwo === '*') {
        num2 = numOne * numTwo
      displayTotal()
    }
    if (operatorTwo === '/') {
        num2 = numTwo / numOne
      displayTotal()
    }
  }

function displayTotal() {
displayScreen.textContent = parseFloat( num2)
firstNumber = ''
}

equalityBtn.addEventListener('click', calculateTotal);

function clearDisplay(){
    displayScreen.innerHTML = " ";
    num1 = "";
    num2 = "";
    operatorOne = "";
    operatorTwo = "";
  
}

clearAllBtn.addEventListener('click', clearDisplay);


