
let num1 = "";
let num2= "";
let symbols = "";
let numBtn = document.querySelectorAll('.number-btn');

const calculator = document.getElementById('calculator');

const displayScreen = document.getElementById('displayTotal');



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

function clearDisplay(){
    document.getElementById('display-total').value = " ";
}





