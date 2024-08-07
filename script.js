let currentInput = '';
let operation = '';

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOperation(op) {
    if (currentInput !== '') {
        operation = op;
        currentInput += ` ${op} `;
        updateDisplay();
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (e) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}