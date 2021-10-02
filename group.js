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
        let person = this._start;    
        let txt = '';
        
        
        while(person !== null) {
            let txtNext = ` ${person.getCode()}: ${person.getName()}.`;                  
            person = person._next;
                
            txt += txtNext;               
        }
        return txt;                
    }
}