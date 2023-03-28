const button = document.querySelectorAll('button');
const result = document.querySelector('#result');
const calculation = [];
let operation;
const imgContainer = document.querySelector('#img-container');
const img = document.createElement('img');
imgContainer?.append(img);
const moduleURL = import.meta.url;
const relativeURL = './media/calculator.jpg';
const imgURL = new URL(relativeURL, moduleURL);
img !== null ? img.src = imgURL.href : null;
button.forEach(button => button.addEventListener('click', () => calculate(button)));
function calculate(button) {
    const value = button.textContent;
    if (value !== null && result !== null && value === 'C') {
        result.textContent = '0';
        calculation.length = 0;
    }
    else if (value !== null && result !== null && value === '=') {
        calculation.length = 0;
        result.textContent = eval(operation);
    }
    else {
        value !== null && calculation.push(value);
        operation = calculation.join('');
        result !== null ? result.textContent = operation : null;
    }
}
export {};
