let firstValue="";
let operation = null;
let secondValue="";
let display = document.querySelector('p');

function giveValue(a){
    firstValue+=a;
    display.innerText = firstValue;
}

function operator(operate){ 
    if (firstValue === '') return;
    
    if(!operation){
        operation=operate;
        secondValue = firstValue;
        firstValue = "";
    }
}

const special = {
    'AC': ()=>{
        firstValue="";
        operation = null;
        secondValue="";
    },
    'C': ()=>{firstValue =""},
    'back': ()=>{firstValue= firstValue.slice(0,-1);},
    '=':calculate(),
}

function specialKey(){
    if(special[key]){
        special[key]();
    }
}
const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b === 0 ? 'Error' : a / b,
    '%': (a, b) => a % b,
};

function calculate(){
    const a = parseFloat(firstValue);
    const b = parseFloat(secondValue);

    const result = operations[sighn](a, b);
    display.innerText = result;
    operation = null;
    secondValue = "";
    firstValue = "";
}
