import { Calculate } from './Calculate.js';
import { scroll } from './scrollFunction.js';
import { count } from './countFunction.js';
import { alerta } from './alert.js';

const display = document.getElementById('display');
const track = document.getElementById('track');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const ponto = document.getElementById('ponto');
const erase = document.getElementById('erase');
let operatorArray = [plus, minus, multiply, divide];
let numberArray = [];


let calc = new Calculate;
let current = '';
let calcTrack = '';


for (let i = 0; i < 10; i++) {
    numberArray.push(document.getElementById(`number${i}`));
}

for (let i = 0; i < numberArray.length; i++) {
    numberArray[i].addEventListener('click', (e) => {
        if(count(current) + 1 > 9) {
            alerta();
        } else {
            current += e.target.textContent;
            calcTrack += e.target.textContent;
            calc.Calc(current);
            display.textContent = calc.Result;
            track.textContent = calcTrack;
            scroll(track);
        }
    });
}
for (let i = 0; i < operatorArray.length; i++) {
    operatorArray[i].addEventListener('click', (e) => {
        calc.Operador = e.target.textContent;
        if(calcTrack.slice(-1).charCodeAt() === 45 || calcTrack.slice(-1).charCodeAt() === 247 || calcTrack.slice(-1).charCodeAt() === 43 || calcTrack.slice(-1).charCodeAt() === 215) {
            calcTrack = calcTrack.slice(0, -1);
        }
        calcTrack += calc.Operador;
        track.textContent = calcTrack;
        scroll(track);
        display.textContent = calc.Result;
        calc.Anterior = calc.Result;
        current = '';
    });
}
ponto.addEventListener('click', (e) => {
    if(count(current) + 1 > 9) {
        alerta();
    } else {
        current += '.';
        calcTrack += '.';
        calc.Calc(current);
        display.textContent = calc.Result;
        track.textContent = calcTrack;
        scroll(track);
    }
});
document.addEventListener('keypress', (e) => {
    let keyPressed = e.key.charCodeAt();
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
erase.addEventListener('click', () => {
    calc = new Calculate;
    current = '';
    calcTrack = '';
    display.textContent = '';
    track.textContent = calcTrack;
});