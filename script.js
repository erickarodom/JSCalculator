
let num = "";
let nextNum= "";
let symbols = "";
let numBtn = document.querySelectorAll('.number-btn');

const calculator = document.getElementById('calculator');
// console.log(parseFloat(collection.elements.one.value));

const displayScreen = document.getElementById('displayTotal');



calculator.addEventListener('click', function(e){
    let currentNumber = parseFloat(e.target.value);
    if(Number.isNaN(currentNumber)){
        console.log(`The last button you pressed is not a number, the current number is ${num}`);
       
    } else {
        num += currentNumber;
        console.log(num);
        displayScreen.innerText = num;
    }
    
});

function theMath(){

}





