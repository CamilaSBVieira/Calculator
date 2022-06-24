
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

class Calculate {
    constructor() {
        this._anterior = 0;
        this._result = 0;
        this._operador = '+';
    }
    get Anterior() {
        return this._anterior;
    }
    get Result() {
        return this._result;
    }
    get Operador() {
        return this._operador;
    }
    set Anterior(num) {
        this._anterior = num;
    }
    set Result(num) {
        this._result = num;
    }
    set Operador(operador) {
        if (operador.charCodeAt() === 47) {
            this._operador = String.fromCharCode(247);
        } else if (operador.charCodeAt() === 42) {
            this._operador = String.fromCharCode(215);
        } else {
            this._operador = operador;
        }
    }
    Calc(current) {
        if (this.Operador === '+') {
            this.Result = Number(this.Anterior) + Number(current);
        } else if (this.Operador === '-') {
            this.Result = Number(this.Anterior) - Number(current);
        } else if (this.Operador.charCodeAt() === 215) {
            this.Result = Number(this.Anterior) * Number(current);
        } else if (this.Operador.charCodeAt() === 247) {
            this.Result = Number(this.Anterior) / Number(current);
        }
    }
}

let calc = new Calculate;
let current = '';
let calcTrack = '';

for (let i = 0; i < 10; i++) {
    numberArray.push(document.getElementById(`number${i}`));
}
console.log(numberArray);

for (let i = 0; i < numberArray.length; i++) {
    numberArray[i].addEventListener('click', (e) => {
        current += e.target.textContent;
        calc.Calc(current);
        display.textContent = calc.Result;
        calcTrack += e.target.textContent;
        track.textContent = calcTrack;
    });
}
for (let i = 0; i < operatorArray.length; i++) {
    operatorArray[i].addEventListener('click', (e) => {
        calc.Operador = e.target.textContent;
        calcTrack += calc.Operador;
        track.textContent = calcTrack;
        calc.Anterior = calc.Result;
        current = 0;
    });
}
ponto.addEventListener('click', (e) => {
    current += '.';
    calcTrack += '.';
    calc.Calc(current);
    display.textContent = calc.Result;
    track.textContent = calcTrack;
});
document.addEventListener('keyup', (e) => {
    let keyPressed = e.key.charCodeAt();
    if (keyPressed > 47 && keyPressed < 58) {
        current += String.fromCharCode(keyPressed);
        calc.Calc(current);
        display.textContent = calc.Result;
        calcTrack += String.fromCharCode(keyPressed);
        track.textContent = calcTrack;
    }
    if (keyPressed === 42 || keyPressed === 43 || keyPressed === 45 || keyPressed === 47) {
        calc.Operador = String.fromCharCode(keyPressed);
        calcTrack += calc.Operador;
        track.textContent = calcTrack;
        calc.Anterior = calc.Result;
        current = 0;
    }
    if (keyPressed === 46) {
        current += '.';
        calcTrack += '.';
        calc.Calc(current);
        display.textContent = calc.Result;
        track.textContent = calcTrack;
    }
});
erase.addEventListener('click', () => {
    calc = new Calculate;
    current = '';
    calcTrack = '';
    display.textContent = '';
    track.textContent = calcTrack;
});