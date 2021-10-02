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
        let table = document.getElementById('table');

        if(this._group._start === null) {
            details.innerHTML += '<h4>No hay nadie.</h4>';
        } else {
            details.innerHTML += '<h4>Lista Predeterminada.</h4>';
            this._update();
            this._group.list(table);
            
        }         
    }
    
    // Métodos privados para actualizar la tabla //    
    _update() {
        let table = document.getElementById('table');
        let htmlTable = `<tr>
                            <th>CÓDIGO</th>                                
                            <th>NOMBRE</th>                       
                        </tr>`

        table.innerHTML = htmlTable;
    }
}
new App();