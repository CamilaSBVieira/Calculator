// create class for calculator
export class Calculate {
    constructor() {
        // adds 3 properties: previous which is the previous number typed, the result, 
        // which stores the result of calculation, and the operador, to use on the calculate function
        this._anterior = 0;
        this._result = 0;
        this._operador = '+';
    }
    // getters
    get Anterior() {
        return this._anterior;
    }
    get Result() {
        return this._result;
    }
    get Operador() {
        return this._operador;
    }
    // setters
    set Anterior(num) {
        this._anterior = num;
    }
    set Result(num) {
        this._result = num;
    }
    // the setter method for the operator converts * into × and / into ÷ before storing
    // if it's not * or / it just stores
    set Operador(operador) {
        if (operador.charCodeAt() === 47) {
            this._operador = String.fromCharCode(247);
        } else if (operador.charCodeAt() === 42) {
            this._operador = String.fromCharCode(215);
        } else {
            this._operador = operador;
        }
    }
    // function to calculate based on the operator 
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