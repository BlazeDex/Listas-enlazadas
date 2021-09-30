export default class Person {
    constructor(code, name) {
        this._code = code;
        this._name = name;
        this._next = null;
    }

    getCode() {
        return this._code;
    }

    getName() {
        return this._name.toUpperCase();
    }
    
    showInfo() {
        return `<div>
                    <p>Código: ${this._code}</p>
                    <p>Nombre: ${this.getName()}</p>              
                </div>`
    }
}