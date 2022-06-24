
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
        this._operador = operador;
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
        calcTrack += e.target.textContent;
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
erase.addEventListener('click', () => {
    document.location.reload(true)
})