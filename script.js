//variables=======================
let num1 = "";
let num2= "";
let currentOperator1 = "";
let priorOperator2 = "";

const calculator = document.getElementById('calculator-body');
const displayScreen = document.getElementById('displayTotal');
const clearAllBtn = document.querySelector('#clearAll');
const calculateTotal = document.querySelector('#equalBtn');
const getNumbers = document.querySelectorAll('.number-btn');
const getOperators = document.querySelectorAll('.operator');


//functions=====================

calculator.addEventListener('click', function(e){
    let currentNumber = e.target.value;
    currentNumber = parseInt(currentNumber);
    
    if(Number.isNaN(currentNumber) && num1 !== " "){     
        num1 = parseFloat(num1);
        console.log(num1);
        console.log(currentNumber.toString());   
    } else {
        console.log(currentNumber);
        num1 += currentNumber;
        console.log(num1);
        displayScreen.innerText = num1;   
    }
});

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function 

function clearDisplay(){
    displayScreen.innerHTML = " ";
    num1 = "";
    num2 = "";
    operator1 = "";
    operator2 = "";
    currentNumber = "";
}

//calls================================

clearAllBtn.addEventListener('click', clearDisplay);


