let firstValue="";
let operation = null;
let secondValue="";
let display = document.querySelector('p');

function giveValue(a){
    // Prevent multiple decimals
    if (a === '.' && firstValue.includes('.')) return;
    firstValue += a;
    display.innerText = firstValue;
}

function operator(operate){ 
    if (firstValue === '') return;
    
    if (secondValue !== "") {
        calculate();
    }
    operation = operate;
    secondValue = firstValue;
    firstValue = "";
}

const special = {
    'AC': ()=>{
        firstValue="";
        operation = null;
        secondValue="";
        display.innerText = "";
    },
    'C': ()=>{
        firstValue = "";
        display.innerText = firstValue;
    },
    'back': ()=>{
        firstValue = firstValue.slice(0, -1);
        display.innerText = firstValue;
    }
};

function specialKey(key){
    if (special[key]) {
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
    if (!operation || firstValue === "" || secondValue === "") return;

    const a = parseFloat(secondValue);
    const b = parseFloat(firstValue);

    const result = operations[operation](a, b);
    
    firstValue = result === 'Error' ? "Error" : result.toString();
    display.innerText = firstValue;
    secondValue = "";
    operation = null;
}
