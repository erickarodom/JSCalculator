let num = "";
let nextNum= "";
let numBtn = document.querySelectorAll('.number-btn');

let calculator = document.getElementById('calculator');
// console.log(parseFloat(collection.elements.one.value));

const displayScreen = document.getElementById('displayTotal');



calculator.addEventListener('click', function(e){
    let currentNumber = parseFloat(e.target.value);

    if(currentNumber == NaN ){
    console.log('select a number');
    } else {
    num+= currentNumber;
    displayScreen.innerText= parseFloat(num);
    console.log(currentNumber);
    }
});



