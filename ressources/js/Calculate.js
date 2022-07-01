export class Calculate {
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