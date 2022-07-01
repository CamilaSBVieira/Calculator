// import class
import { Calculate } from './Calculate.js';
// import scroll function
import { scroll } from './scrollFunction.js';
// import count function
import { count } from './countFunction.js';
// import alerta function
import { alerta } from './alert.js';

// get display paragraph
const display = document.getElementById('display');
// get track paragraph
const track = document.getElementById('track');
// get plus button
const plus = document.getElementById('plus');
// get minus button
const minus = document.getElementById('minus');
// get multiply button
const multiply = document.getElementById('multiply');
// get divide button
const divide = document.getElementById('divide');
// get dot button
const ponto = document.getElementById('ponto');
// get clear button
const erase = document.getElementById('erase');

// create array with operator buttons
let operatorArray = [plus, minus, multiply, divide];
// create array for number buttons
let numberArray = [];


/* 
the logic for the calculator:
when the number is being typed, it is stored to the current variable
when the user types an operator, the current number is stored on the previous property and current is emptied
if the user types another operator, reset the operator property
when the user types more numbers, the current variable stores the numbers and the function calculate is called with the previous property and the current number
the result is updated as the user types
everything (number and operator) is stored on the tracking variable
*/
// create instance for Calculate class
let calc = new Calculate;
// create variable to store the current number being typed
let current = '';
// create variable to store the calculation
let calcTrack = '';

// loop that pushes all number button elements into the number array
for (let i = 0; i < 10; i++) {
    numberArray.push(document.getElementById(`number${i}`));
}

// loop that adds event listeners to clicks on the number button elements
for (let i = 0; i < numberArray.length; i++) {
    numberArray[i].addEventListener('click', (e) => {
        // checks if number is gonna be too long
        if(count(current) + 1 > 9) {
            // if number is gonna be longer than 9, shows alert message to user
            alerta();
        } else {
            // if number isn't too long 
            // stores content of button to current variable
            current += e.target.textContent;
            // stores content of button to tracking variable
            calcTrack += e.target.textContent;
            // calls function from class to do the operation
            calc.Calc(current);
            // adds the result to the display element
            display.textContent = calc.Result;
            // adds the tracking content to the track element
            track.textContent = calcTrack;
            // if the paragraph overflows, call the function to auto scroll content
            scroll(track);
        }
    });
}
// loop that adds event listeners for clicks on operator buttons
for (let i = 0; i < operatorArray.length; i++) {
    operatorArray[i].addEventListener('click', (e) => {
        // stores the operator on the class instance
        calc.Operador = e.target.textContent;
        // checks if the last digit on the calculation is already an operator
        if(calcTrack.slice(-1).charCodeAt() === 45 || calcTrack.slice(-1).charCodeAt() === 247 || calcTrack.slice(-1).charCodeAt() === 43 || calcTrack.slice(-1).charCodeAt() === 215) {
            // if it is an operator, it is removed from the tracking to replace for the new one
            calcTrack = calcTrack.slice(0, -1);
        }
        // inserts new operator in the tracking variable
        calcTrack += calc.Operador;
        // inserts the tracking content on the tracking element
        track.textContent = calcTrack;
        // if it's overflowing, calls the function to scroll content
        scroll(track);
        // display.textContent = calc.Result;
        // puts result to the previous number property on class instance
        calc.Anterior = calc.Result;
        // empties the current number variable
        current = '';
    });
}
// adds event listerner for clicks on the period button
ponto.addEventListener('click', (e) => {
    // if the number is gonna be too long, calls the function to alert user
    if(count(current) + 1 > 9) {
        alerta();
    } else {
        // adds the period to the current and tracking variables
        current += '.';
        calcTrack += '.';
        // calls the calculate function from class
        calc.Calc(current);
        // puts the result in the display element
        display.textContent = calc.Result;
        // updates the track element
        track.textContent = calcTrack;
        // if the element is overflowing, calls function to auto scroll content
        scroll(track);
    }
});
// adds event listener for clicks on the erase button
erase.addEventListener('click', () => {
    // starts new instance of class, and empties every variable and displaying element
    calc = new Calculate;
    current = '';
    calcTrack = '';
    display.textContent = '';
    track.textContent = calcTrack;
});
// adds event listener for clicks on keys being pressed
document.addEventListener('keypress', (e) => {
    // stores content of key in the variable keyPressed
    let keyPressed = e.key.charCodeAt();
    // checks and treats if key pressed is a number
    if (keyPressed > 47 && keyPressed < 58) {
        if(count(current) + 1 > 9) {
            alerta();
        } else {
            current += String.fromCharCode(keyPressed);
            calc.Calc(current);
            display.textContent = calc.Result;
            calcTrack += String.fromCharCode(keyPressed);
            track.textContent = calcTrack;
            scroll(track);
        }
    }
    // checks and treats if key pressed is an operator
    if (keyPressed === 42 || keyPressed === 43 || keyPressed === 45 || keyPressed === 47) {
        calc.Operador = String.fromCharCode(keyPressed);
        // alert(calcTrack.slice(-1));
        // alert(calcTrack.slice(-1).charCodeAt() === 43);
        if(calcTrack.slice(-1).charCodeAt() === 45 || calcTrack.slice(-1).charCodeAt() === 247 || calcTrack.slice(-1).charCodeAt() === 43 || calcTrack.slice(-1).charCodeAt() === 215) {
            calcTrack = calcTrack.slice(0, -1);
        }
        calcTrack += calc.Operador;
        track.textContent = calcTrack;
        scroll(track);
        calc.Anterior = calc.Result;
        current = '';
    }
    // checks and treats if key pressed is period
    if (keyPressed === 46) {
        if(count(current) + 1 > 9) {
            alerta();
        } else {
            current += '.';
            calcTrack += '.';
            scroll(track);
            calc.Calc(current);
            display.textContent = calc.Result;
            track.textContent = calcTrack;
        }
    }
});