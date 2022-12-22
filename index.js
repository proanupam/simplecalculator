let firstOperand;
let secondOperand;
let inputNumArray = [];
let mathsBtnClicked = false;
let mathsExpr;

let equalBtn = document.getElementById('equals');
equalBtn.addEventListener('click', outputCalculation);

const calculatorScreen = document.querySelector(".calculator-screen");

function readInputDigit(buttonId){
    let btnClicked = document.getElementById(buttonId);
    let foo = btnClicked.textContent;
    inputNumArray.push(foo);
    console.log(inputNumArray);
    outputOnScreen(inputNumArray);
}

function outputOnScreen(inputArray){

    let recievedArray = inputArray.slice(0,16);
    let recievedString = recievedArray.join('');
    calculatorScreen.textContent = recievedString;
    console.log(mathsBtnClicked);
    if(!mathsBtnClicked){
        firstOperand = parseFloat(recievedString);
    }else if(mathsBtnClicked){
        secondOperand = parseFloat(recievedString);
    }
}

function decimalPoint(){
    if(inputNumArray.includes(".")){
        return;
    }else{
        inputNumArray.push(".");
        outputOnScreen(inputNumArray);
    }
}

function deleteOp(){
    console.log(inputNumArray);
    inputNumArray = inputNumArray.slice(0, -1);
    outputOnScreen(inputNumArray);
}

function clearOp(){
    inputNumArray = [];
    mathsBtnClicked = false;
    outputOnScreen(inputNumArray);
    console.log(inputNumArray);
}

function mathsOp(btnId){
    console.log("maths operation ----")
    mathsBtnClicked = true;
    inputNumArray = [];
    mathsExpr = btnId;
}

function outputCalculation(){
    let result;
    if(secondOperand == null){
        return;
    }
    switch(mathsExpr){
        case 'add':
            result = firstOperand + secondOperand;
            calculatorScreen.textContent = result;
            firstOperand = result;
            secondOperand = null;
            mathsBtnClicked = false;
            inputNumArray = [result];
            break;
        case 'sub':
            result = firstOperand - secondOperand;
            calculatorScreen.textContent = result;
            firstOperand = result;
            secondOperand = null;
            mathsBtnClicked = false;
            inputNumArray = [result];
            break;
        case 'multiply':
            result = firstOperand * secondOperand;
            calculatorScreen.textContent = result;
            firstOperand = result;
            secondOperand = null;
            mathsBtnClicked = false;
            inputNumArray = [result];
            break;  
        case 'divide':
            result = firstOperand / secondOperand;
            calculatorScreen.textContent = result;
            firstOperand = result;
            secondOperand = null;
            mathsBtnClicked = false;
            inputNumArray = [result];
            break;    
    }      
}