let inputNumArray   = [];
let inputNumArrlen  = 0;
let operandsArray = [];
let operationRequested;
let firstOperand;
let secondOperand;
let operatorArr = ['Add', 'Sub', 'Divide', 'Multiply'];
let isMathsBtnClicked = false;

const calculatorScreen = document.querySelector('.calculator-screen');

function readInputDigit(buttonId){

    let foo = document.getElementById(buttonId);
    let enteredDigit = foo.textContent;
    // console.log("Entered digit is: " + enteredDigit + " - " + typeof(enteredDigit));
    inputNumArray.push(enteredDigit);
    outputOnScreen(inputNumArray);
}

function decimalPoint(){
    if(inputNumArray.includes(".")){
        return;
    }
    inputNumArray.push(".");
    outputOnScreen(inputNumArray);
}

function deleteOp(){
    inputNumArray = inputNumArray.slice(0,-1);
    outputOnScreen(inputNumArray);
}

function outputOnScreen(inputArr){
    let baz = inputArr.slice(0,16);
    let displayArr = baz.join('');
    if(isMathsBtnClicked){
        secondOperand = displayArr;
    }else{
        firstOperand = displayArr;
    }
    calculatorScreen.textContent = displayArr;
}

function clearOp(){
    calculatorScreen.textContent = "";
    inputNumArray = [];
    console.log("Clearing contents...")
}

function mathsOp(id){
    calculatorScreen.textContent = "";
    isMathsBtnClicked = true;    
    let expr = id;
    switch (expr){
        case 'add':
            operationRequested = "+";
            break;
        case 'sub':
            operationRequested = "-";
            break;
        case 'multiply':
            operationRequested = "*";
            break;
        case 'divide':
            operationRequested = "/";
            break;
        case 'equals':
            outputResult(firstOperand,secondOperand,operationRequested);  
    }
}

function outputResult(firstOperand,secondOperand,operationRequested){
    let result;
    let op1 = parseInt(firstOperand);
    let op2 = parseInt(secondOperand);
    if(operationRequested == "+"){
        result = op1 + op2;
        calculatorScreen.textContent = result;
        inputNumArray = [];
    }else if(operationRequested == "-"){
        result = op1 - op2;
        outputOnScreen(result);
    }
}