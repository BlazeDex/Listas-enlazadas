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
    
    list() {
        if(this._start === null) {
            return false;
        } else {
            return true;
        }
    }
}

