let display = document.getElementById('display');
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    display.value += number;
}

function setOperation(operation) {
    if (display.value === '') return; // Impede definir operação sem um número inicial
    firstOperand = parseFloat(display.value);
    currentOperation = operation;
    display.value = '';
}

function clearDisplay() {
    display.value = '';
    currentOperation = null;
    firstOperand = null;
}

function calculate() {
    if (currentOperation === null || display.value === '') return;

    const secondOperand = parseFloat(display.value);
    if (isNaN(firstOperand) || isNaN(secondOperand)) return;

    let result;
    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = secondOperand !== 0 ? firstOperand / secondOperand : 'Erro';
            break;
        default:
            return;
    }

    display.value = result;
    currentOperation = null;
    firstOperand = null;
}