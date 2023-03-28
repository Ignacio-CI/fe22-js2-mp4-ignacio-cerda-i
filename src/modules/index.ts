const button: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
const result: HTMLElement | null = document.querySelector('#result');
const calculation: string[] = [];
let operation: string;
const imgContainer: HTMLDivElement | null = document.querySelector('#img-container');
const img: HTMLImageElement | null = document.createElement('img');
imgContainer?.append(img);

const moduleURL: string = import.meta.url; 
const relativeURL: string = './media/calculator.jpg';

const imgURL = new URL(relativeURL, moduleURL);

img !== null ? img.src = imgURL.href : null;

button.forEach( button => button.addEventListener('click', () => calculate(button)));

function calculate(button: HTMLButtonElement)  {
    const value: string | null = button.textContent;

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

