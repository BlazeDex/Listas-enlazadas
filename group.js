export default class Group {    
    constructor() {
        this._start = null;
    }

    add(person) {
        if(this._start ===  null) {
            this._start = person;
        } else {
            let temp = this._start;
            while(temp._next !== null) {
                temp = temp._next;
            }
            temp._next = person;
        }
    }
    
    list(table) {
        let person = this._start;

        while(person !== null) {
            let rowProducts = table.insertRow(-1);
            let colCode = rowProducts.insertCell(0);
            let colName = rowProducts.insertCell(1);  
            colCode.innerHTML = person.getCode();
            colName.innerHTML = person.getName();
            person = person._next;              
        }      
    }
}

