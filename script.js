
let num1 = "";
let num2= "";
let symbols = "";
let numBtn = document.querySelectorAll('.number-btn');

const calculator = document.getElementById('calculator');
// console.log(parseFloat(collection.elements.one.value));

const displayScreen = document.getElementById('displayTotal');



calculator.addEventListener('click', function(e){
    let currentNumber = parseFloat(e.target.value);
    
    if(Number.isNaN(currentNumber)){
        console.log(`The last button you pressed is not a number, the current number is ${num1}`);
        let captureNumber = parseInt(num1);
        console.log(captureNumber);
        
    } else {
        num1 += currentNumber;
        console.log(num1);
        displayScreen.innerText = num1;
    }
});

function add(a,b){
    return a + b;

}





