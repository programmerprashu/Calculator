let display =document.getElementById("display");
function appendNumber(number) {
    display.value += number;
}

function operator(operator) {
    display.value += ' ' + operator + ' ';
}

function allClear() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function deleteLastDigit() {
    display.value = display.value.slice(0, -1);
}
