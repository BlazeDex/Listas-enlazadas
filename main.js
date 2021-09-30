import Group from './group.js';
import Person from './person.js';


class App {
    constructor() {
        this._group = new Group();
        //Botón "Añadir"//
        let btnAdd = document.getElementById('btnAdd');
        btnAdd.addEventListener('click', this.addPerson);
        //Botón "Listar"//
        let btnList = document.getElementById('btnList');
        btnList.addEventListener('click', this.listPerson);
    }

    addPerson = () => {
        let inpCode = document.getElementById('txtCode');
        let inpName = document.getElementById('txtName');
        let code = inpCode.value;
        let name = inpName.value;
        let details = document.getElementById('details');
        let person;

        if(code && name) {
            inpCode.value = '';
            inpName.value = '';

            person = new Person(code, name);
        } else {
            details.innerHTML += 
            '<h4>Ingresa los datos principales.</h4>';
            return;   
        }

        this._group.add(person);
        details.innerHTML += 
        `<h4>${person.getName()} se ha registrado en el grupo.</h4>`;

        console.log(this._group);
    }

    listPerson = () => {
        let details = document.getElementById('details');
        let list = this._group.list();
        
        if(list) {
            this._update();    
            this._showTable();
            details.innerHTML += `<h4>Lista predeterminada.</h4>`;
        } else {
            details.innerHTML += 
            '<h4>No hay nadie registrado en el grupo.</h4>';  
        }
        console.log(this._group)
    }
    
    // Métodos privados para mostrar tablas //    
    _update() {
        let table = document.getElementById('table');
        let htmlTable = `<tr>
                            <th>CÓDIGO</th>                                
                            <th>NOMBRE</th>                       
                        </tr>`

        table.innerHTML = htmlTable;
    }

    _showTable() {
        let table = document.getElementById('table');
        let person = this._group._start;

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
new App();